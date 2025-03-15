"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";


const Cursor = ({ isActive, radius }) => {

    const mouse = useRef({x: 0, y: 0});
    const delayedMouse = useRef({x: 0, y: 0});
    const rafId = useRef(null);
    const circle = useRef();
    const size = radius

    const pathname = usePathname();
    
    const lerp = (x, y, a) => x * (1 - a) + y * a

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
    
        mouse.current = {
            x: clientX,
            y: clientY
        }  
    }

    const animate = () => {
        const { x, y } = delayedMouse.current;

        delayedMouse.current = {
            x: lerp(x, mouse.current.x, 0.075),
            y: lerp(y, mouse.current.y, 0.075)
        }

        moveCircle(delayedMouse.current.x, delayedMouse.current.y);
        rafId.current = window.requestAnimationFrame(animate);
    }

    const moveCircle = (x, y) => {
        gsap.set(circle.current, {x, y, xPercent: -50, yPercent: -50})
    }

    useEffect(() => {
        animate();
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            window.cancelAnimationFrame(rafId.current)
        }
    }, [isActive])

    return (
        <div className="relative mix-blend-difference pointer-events-none z-[250]">
            <div 
                style={{
                    borderColor: pathname !== "/" ? "#78716c" : "#ffffff",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    width: size,
                    height: size,
                    WebkitBackdropFilter: "saturate(1.75) contrast(1.1) brightness(1.1) hue-rotate(-15deg)",
                    backdropFilter: "saturate(1.75) contrast(1.1) brightness(1.1) hue-rotate(-15deg)",
                    borderRadius: "9999px",
                    transition: `height 0.3s ease-out, width 0.3s ease-out`,
                    pointerEvents: "none"
                }}
                className="top-0 left-0 fixed" 
                ref={circle}
            />
        </div>
    )
}


export default Cursor;