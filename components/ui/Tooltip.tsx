import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import { Transition } from '@headlessui/react';

interface TooltipProps {
  html: JSX.Element,
  text: string,
  children: any,
}

const portalDiv = document.querySelector('body')!;

const Tooltip = (props: TooltipProps): JSX.Element => {
  const { html, text, children } = props;
  const [show, toggleShow] = useState(false);
  const triggerElementRef = useRef(null);
  const popperElementRef = useRef(null);
  const { styles, attributes } = usePopper(
    triggerElementRef.current,
    popperElementRef.current,
  {
    placement: 'bottom',
    modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
  });

  const handleShow = () => {
    if (!show) toggleShow(true);
  };

  const handleHide = () => {
    if (show) toggleShow(false);
  };

  const renderTooltip = () => {
    if (show) {
      return createPortal(
        <div className="z-tooltip" ref={popperElementRef.current} style={styles.popper} {...attributes.popper}>
          <Transition
            show={show}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
            role="tooltip"
            className="bg-white text-gray-500 ring-1 ring-gray-400 text-xs font-medium transition text-center rounded shadow-lg outline-none max-w-xs text-xxs break-words p-2"
          >
            <div className="p-1 flex justify-center">{html}</div>
            <div className="p-1">{text}</div>
          </Transition>
        </div>,
        portalDiv,
      );
    }
    return false;
  };

  return (
    <>
      <span
        onMouseEnter={handleShow}
        onMouseLeave={handleHide}
        onTouchStart={handleShow}
        onTouchCancel={handleHide}
        ref={triggerElementRef.current}
      >
        {children}
      </span>
      {renderTooltip()}
    </>
  );
}

export default Tooltip;