/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import { throttle } from "lodash";

export const useMousePosition = () => {
  const mountedRef = useRef(true);
  const [mousePosition, setMousePosition] = useState([0, 0]);

  const updateMousePosition = throttle((ev) => {
    if (mountedRef.current) setMousePosition([ev.clientX, ev.clientY]);
  }, 200);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      mountedRef.current = false;
      window.removeEventListener("mousemove", updateMousePosition);
    }
  }, []);

  return mousePosition;
};