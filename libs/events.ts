interface EventEmitterProps {
  events: any,
  dispatch: Function,
  subscribe: Function,
  unsubscribe: Function,
}

const EventEmitter: EventEmitterProps = {
  events: {},
  dispatch(event: string, data: any) {
    if (!this.events[event]) return;
    this.events[event].forEach((callback: Function) => callback(data));
  },
  subscribe(event: string, callback: Function) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(callback);
  },
  unsubscribe(event: string) {
    if (!this.events[event]) return;
    delete this.events[event];
  },
};

export default EventEmitter;