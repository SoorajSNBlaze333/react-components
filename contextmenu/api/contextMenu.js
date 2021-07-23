import { emitter } from "../index";

const contextMenu = {
  open({ event, ...data }) {
    if (!event) return;
    event.preventDefault();
    const newData = {
      show: true,
      x: event.clientX,
      y: event.clientY,
      ...data
    }
    return emitter.dispatch('react-context-update-hook-#001', { ...newData });
  },
};

export default contextMenu;