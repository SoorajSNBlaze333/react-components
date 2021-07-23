import React from "react";
import { useMousePosition } from "../hooks/useMousePosition";

const getLeft = ({ x, mouseX }) => (mouseX > x ? undefined : -Math.max(x - mouseX, 10) + "px");
const getRight = ({ x, w, mouseX }) => (mouseX > x ? -Math.max(mouseX - (x + w), 10) + "px" : undefined);
const getWidth = ({ x, w, mouseX }) =>
  mouseX > x ? Math.max(mouseX - (x + w), 10) + "px" : Math.max(x - mouseX, 10) + "px";
const getClipPath = ({ x, y, h, mouseX, mouseY }) =>
  mouseX > x
    ? `polygon(0% 0%, 0% 100%, 100% ${(100 * (mouseY - y)) / h}%)`
    : `polygon(100% 0%, 0% ${(100 * (mouseY - y)) / h}%, 100% 100%)`;

export default function MouseSafe({ parentRef }) {
  const { x = 0, y = 0, height: h = 0, width: w = 0 } = parentRef.current?.getBoundingClientRect() || {};
  const [mouseX, mouseY] = useMousePosition();
  const positions = { x, y, h, w, mouseX, mouseY };
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        backgroundColor: "rgba(255,0,0,0.1)", // Debug
        right: getRight(positions),
        left: getLeft(positions),
        height: h,
        width: getWidth(positions),
        clipPath: getClipPath(positions),
      }}
    />
  );
}