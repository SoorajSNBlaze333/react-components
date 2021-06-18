interface EventEmitterProps {
  _events: any,
  dispatch: Function,
  subscribe: Function,
  unsubscribe: Function,
}

export const EventEmitter: EventEmitterProps = {
  _events: {},
  dispatch(event: string, data: any) {
    if (!this._events[event]) return;
    this._events[event].forEach((callback: Function) => callback(data));
  },
  subscribe(event: string, callback: Function) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  },
  unsubscribe(event: string) {
    if (!this._events[event]) return;
    delete this._events[event];
  },
};