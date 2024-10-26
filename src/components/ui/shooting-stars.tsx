"use client";

import React, { useEffect, useState, useRef } from "react";

 
interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}
 
interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}
 

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  function getRandom(min: number, max: number) {
    return Math.random() * (max - min) + min
  }
 
  switch (side) {
    case 0:
      return { x: offset, y: 0, angle: getRandom(30, 60) };
    case 1:
      return { x: window.innerWidth, y: offset, angle: getRandom(120, 150) };
    case 2:
      return { x: offset, y: window.innerHeight, angle: getRandom(210, 240) };
    case 3:
      return { x: 0, y: offset, angle: getRandom(300, 330)};
    default:
      return { x: 0, y: 0, angle: getRandom(10, 80) };
  }
}
const star_colors = ["#fff1f2", "#ffe4e6", "#fdf2f8", "#fce7f3", "#fdf4ff", "#fecdd3", "#fbcfe8"]
const trail_colors = ["#fff1f2", "#ffe4e6", "#fdf2f8", "#fce7f3", "#fdf4ff",]

const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 6,
  maxSpeed = 12,
  minDelay = 30000,
  maxDelay = 30000,
  starWidth = 10,
  starHeight = 1,
}) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
 
  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };
      setStar(newStar);
 
      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };
 
    createStar();
 
    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);
 
  useEffect(() => {
    const moveStar = () => {
      if (star) {
        setStar((prevStar) => {
          if (!prevStar) return null;
          const newX =
            prevStar.x +
            prevStar.speed * Math.cos((prevStar.angle * Math.PI) / 180);
          const newY =
            prevStar.y +
            prevStar.speed * Math.sin((prevStar.angle * Math.PI) / 180);
          const newDistance = prevStar.distance + prevStar.speed;
          const newScale = 1 + newDistance / 100;
          if (
            newX < -20 ||
            newX > window.innerWidth + 20 ||
            newY < -20 ||
            newY > window.innerHeight + 20
          ) {
            return null;
          }
          return {
            ...prevStar,
            x: newX,
            y: newY,
            distance: newDistance,
            scale: newScale,
          };
        });
      }
    };
 
    const animationFrame = requestAnimationFrame(moveStar);
    return () => cancelAnimationFrame(animationFrame);
  }, [star]);
 
  return (
    <svg
      ref={svgRef}
      className="w-full h-full absolute inset-0 transition-opacity animate-fadeIn duration-1400"
    >
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trail_colors[Math.floor(Math.random() * 5)], stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: star_colors[Math.floor(Math.random() * 7)], stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ShootingStars;