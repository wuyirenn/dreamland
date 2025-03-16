"use client";

import React, { useEffect, useRef, useMemo } from "react";
import { usePathname } from "next/navigation";

const Cursor = ({ isActive, radius }) => {
    const mouse = useRef({ x: 0, y: 0 });
    const delayedMouse = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);
    const circle = useRef();
    const size = radius;
    const pathname = usePathname();
    
    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        mouse.current = {
            x: e.clientX,
            y: e.clientY
        };
    };

    const animate = () => {
        const dx = mouse.current.x - delayedMouse.current.x;
        const dy = mouse.current.y - delayedMouse.current.y;
        
        if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
            delayedMouse.current = {
                x: lerp(delayedMouse.current.x, mouse.current.x, 0.2),
                y: lerp(delayedMouse.current.y, mouse.current.y, 0.2)
            };
            
            if (circle.current) {
                circle.current.style.transform = `translate3d(${delayedMouse.current.x}px, ${delayedMouse.current.y}px, 0) translate(-50%, -50%)`;
            }
        }
        
        rafId.current = window.requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
            delayedMouse.current = { ...mouse.current };
            
            rafId.current = window.requestAnimationFrame(animate);
            
            window.addEventListener("mousemove", manageMouseMove, { passive: true });
        }
        
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            if (rafId.current) {
                window.cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    const circleStyle = useMemo(() => ({
        borderColor: pathname !== "/" ? "#78716c" : "#ffffff",
        borderWidth: "1px",
        borderStyle: "solid",
        width: size,
        height: size,
        WebkitBackdropFilter: "saturate(1.75) contrast(1.1) brightness(1.1) hue-rotate(-15deg)",
        backdropFilter: "saturate(1.75) contrast(1.1) brightness(1.1) hue-rotate(-15deg)",
        borderRadius: "9999px",
        transition: `height 0.3s ease-out, width 0.3s ease-out`,
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        willChange: "transform",
        transform: "translate3d(0, 0, 0)"
    }), [pathname, size]);

    return (
        <div className="relative mix-blend-difference pointer-events-none z-[250]">
            <div 
                style={circleStyle}
                ref={circle}
            />
        </div>
    );
};

export default React.memo(Cursor);