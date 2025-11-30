"use client";
import { useEffect, useRef, useState } from "react";

export const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | undefined>(undefined);
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);

      if (mobile) {
        document.body.style.cursor = "auto";
      }
    };

    checkMobile();

    if (isMobile) {
      return;
    }

    const cursorOuter = cursorOuterRef.current;
    const cursorInner = cursorInnerRef.current;

    if (!cursorOuter || !cursorInner) return;

    // Use RAF to batch DOM updates for smooth performance
    const updateCursorPosition = () => {
      const { x, y } = positionRef.current;
      cursorOuter.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      cursorInner.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    };

    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
      
      // Cancel previous RAF if it exists
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      // Schedule update for next frame
      rafRef.current = requestAnimationFrame(updateCursorPosition);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hasCursorHover = target.closest(".cursor-hover") !== null;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        (target.hasAttribute("role") && target.getAttribute("role") === "button") ||
        hasCursorHover
      ) {
        setIsHovering(true);
        document.body.style.cursor = "none";
      } else {
        setIsHovering(false);
        document.body.style.cursor = "auto";
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      document.body.style.cursor = "auto";
    };
  }, [isMobile]);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorOuterRef}
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          willChange: "transform",
        }}
      />
      <div
        ref={cursorInnerRef}
        className="fixed w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999]"
        style={{
          left: 0,
          top: 0,
          willChange: "transform",
        }}
      />
    </>
  );
};
