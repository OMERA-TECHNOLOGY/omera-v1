"use client";
import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      // More reliable mobile detection
      const mobile = window.innerWidth < 1024; // Use 1024px to be safe
      setIsMobile(mobile);

      // CRITICAL: Always restore cursor on mobile
      if (mobile) {
        document.body.style.cursor = "auto";
      }
    };

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const hasCursorHover = target.closest(".cursor-hover") !== null;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        (target.hasAttribute("role") &&
          target.getAttribute("role") === "button") ||
        hasCursorHover
      ) {
        setIsHovering(true);
        // Hide default cursor only when hovering interactive elements
        document.body.style.cursor = "none";
      } else {
        setIsHovering(false);
        // Show default cursor when not hovering
        document.body.style.cursor = "auto";
      }
    };

    // Initial check
    checkMobile();

    // Only add cursor events if not mobile
    if (!isMobile) {
      window.addEventListener("mousemove", updateCursorPosition);
      window.addEventListener("mouseover", handleMouseOver);
      window.addEventListener("resize", checkMobile);
    } else {
      // Ensure cursor is visible on mobile
      document.body.style.cursor = "auto";
    }

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("resize", checkMobile);
      // Restore cursor when component unmounts
      document.body.style.cursor = "auto";
    };
  }, [isMobile]);

  // Don't render anything on mobile
  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? "hover" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="fixed w-2 h-2 rounded-full bg-accent pointer-events-none z-[9999]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
};
