interface KeyboardProps {
  events: any,
  keydown: Function,
  init: Function,
  add: Function,
  remove: Function,
  destroy: Function,
}

const Keyboard: KeyboardProps = {
  events: {},
  keydown(e: KeyboardEvent) {
    let prefixString = '';
    if (e.altKey) prefixString += 'Alt+';
    if (e.ctrlKey) prefixString += 'Ctrl+';
    if (e.metaKey) prefixString += 'Meta+';
    if (e.shiftKey) prefixString += 'Shift+';
    let keyString = e.key;
    const currentKeyString = prefixString + keyString;
    if (this.events[currentKeyString]) {
      this.events[currentKeyString].onKey(e);
    };
  }, 
  init() {
    window.addEventListener("keydown", (e) => this.keydown(e));
  },
  add(key: string, callback: Function) {
    this.events[key] = { onKey: (data: KeyboardEvent) => callback(data) };
  },
  remove(key: string) {
    if (this.events[key]) delete this.events[key];
  },
  destroy() {
    window.removeEventListener("keydown", (e) => this.keydown(e));
    this.events = {};
  }
};

export default Keyboard;