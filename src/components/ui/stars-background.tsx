"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect, useRef, RefObject, useCallback } from "react";
 
interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}
 
interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
}
 
const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.0003,
  allStarsTwinkle = true,
  twinkleProbability = 0.6,
  minTwinkleSpeed = 0.4,
  maxTwinkleSpeed = 1,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const canvasRef: RefObject<HTMLCanvasElement> = useRef<HTMLCanvasElement>(null);
 
  const generateStars = useCallback((width: number, height: number): StarProps[] => {
      const area = width * height;
      const numStars = Math.floor(area * starDensity);

      return Array.from({ length: numStars }, () => {
        const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
          
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 0.2 + 0.7,
          opacity: Math.random() * 0.4 + 0.6,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed,]
  );
 
  useEffect(() => {
    const updateStars = () => {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
 
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };
 
    updateStars();
 
    const resizeObserver = new ResizeObserver(updateStars);
    const canvas = canvasRef.current;
    if (canvas) {
      resizeObserver.observe(canvas);
    }
 
    return () => {
      if (canvas) {
        resizeObserver.unobserve(canvas);
      }
    };
  }, [starDensity, allStarsTwinkle, twinkleProbability, minTwinkleSpeed, maxTwinkleSpeed, generateStars,]
);
 
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
 
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
 
    let animationFrameId: number;
 
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
 
        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.3 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.7);
        }
      });
 
      animationFrameId = requestAnimationFrame(render);
    };
 
    render();
 
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars]);
 
  return (
    <canvas
      ref={canvasRef}
      className="h-screen w-screen absolute inset-0 transition-opacity animate-fadeIn duration-1000 z-50"
      style={{
        filter: "contrast(2.5) brightness(1.8)"
      }}
    />
  );
};

export default StarsBackground