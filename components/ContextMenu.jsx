import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import { Menu as UIMenu, Transition } from '@headlessui/react';

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    let startedInside = false;
    let startedWhenMounted = false;
    const listener = (event) => {
      if (startedInside || !startedWhenMounted) return;
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    const validateEventStart = (event) => {
      startedWhenMounted = ref.current;
      startedInside = ref.current && ref.current.contains(event.target);
    };
    document.addEventListener('mousedown', validateEventStart);
    document.addEventListener('touchstart', validateEventStart);
    document.addEventListener('click', listener);
    return () => {
      document.removeEventListener('mousedown', validateEventStart);
      document.removeEventListener('touchstart', validateEventStart);
      document.removeEventListener('click', listener);
    };
  }, [ref, handler]);
};

const emitter = {
  events: {},
  dispatch(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach((callback) => callback(data));
  },
  subscribe(event, callback) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  unsubscribe(event) {
    if (!this.events[event]) return;
    delete this.events[event];
  },
};

const useContextMenu = () => {
  const [state, setState] = useState({
    show: false,
    x: 0,
    y: 0,
  });
  const update = (data) => {
    const { event = null } = data;
    if (event) event.preventDefault();
    setState((prev) => ({
      ...prev,
      ...data,
      x: event ? event.clientX : prev.x,
      y: event ? event.clientY : prev.y,
    }));
  };
  const close = () => {
    setState((prev) => ({
      ...prev,
      show: false,
    }));
  };
  useEffect(() => {
    emitter.subscribe('react-context-update-hook-#001', update);
    return () => {
      emitter.unsubscribe('react-context-update-hook-#001');
    };
  }, []);
  return { state, update, close };
};

const contextMenu = {
  update(data) {
    return emitter.dispatch('react-context-update-hook-#001', data);
  },
};

const MenuItem = ({ children, ...props }) => (
  <UIMenu.Item className="group flex rounded-md items-center w-full px-2 py-2 text-sm" {...props}>
    {children}
  </UIMenu.Item>
);

const SubMenu = ({ children, text, ...props }) => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const [childrenVisible, setChildrenVisible] = useState(false);

  const handleMouseOver = (e) => {
    if (!childrenVisible) {
      setState({ x: e.target.offsetWidth, y: e.target.offsetTop });
      setChildrenVisible(true);
    }
  }

  const handleMouseOut = (e) => {
    if (childrenVisible) setChildrenVisible(false);
  }

  return (
    <UIMenu.Item as="div" className="group flex rounded-sm items-center w-full text-sm" {...props}>
      <div
        id="submenu_parent"
        className="h-full w-full px-2 py-2"
        onMouseMove={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        {text}
        {(childrenVisible) && (
          <div
            id="submenu_child"
            className="absolute inset-0 h-48 bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            style={{ transform: `translate(${state.x}px, ${state.y}px)` }}
          >
            {children}
          </div>
        )}
      </div>
    </UIMenu.Item>
  );
};

const Menu = ({ children }) => {
  const menuRef = useRef(null);
  const { state, close } = useContextMenu();
  const { show, x, y } = state;

  const handleClose = useCallback(() => close(), []);
  useClickOutside(menuRef, handleClose);

  // useEffect(() => {
  // });

  return (
    <UIMenu as="div" className="inline-block text-left">
      <Transition
        appear
        show={show}
        as="div"
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
        className="absolute inset-0 h-48"
        style={{ transform: `translate(${x}px, ${y}px)` }}
      >
        <div ref={menuRef}>
          <UIMenu.Items className="relative right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            {children}
          </UIMenu.Items>
        </div>
      </Transition>
    </UIMenu>
  );
};

SubMenu.displayName = 'SubMenu';
MenuItem.displayName = 'Item';
Menu.displayName = 'Menu';

export {
  Menu,
  SubMenu,
  MenuItem,
  contextMenu,
};