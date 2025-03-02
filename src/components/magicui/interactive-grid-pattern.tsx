"use client";

import { cn } from "@/lib/utils";
import React, { useState, useCallback, useEffect } from "react";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [16, 16], // Reduced number of squares for better performance
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Debounced hover handler for better performance
  const handleHover = useCallback((index: number | null) => {
    requestAnimationFrame(() => {
      setHoveredSquare(index);
    });
  }, []);

  // Adjust grid density based on device
  const gridSquares = isMobile ? [12, 12] : [horizontal, vertical];
  const [gridH, gridV] = gridSquares;

  return (
    <svg
      width={width * gridH}
      height={height * gridV}
      className={cn(
        "absolute inset-0 h-full w-full opacity-40",
        "transition-opacity duration-300",
        className
      )}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
      {...props}
    >
      {Array.from({ length: gridH * gridV }).map((_, index) => {
        const x = (index % gridH) * width;
        const y = Math.floor(index / gridH) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-400/20 transition-colors duration-300",
              hoveredSquare === index 
                ? "fill-gray-300/30" 
                : "fill-transparent",
              squaresClassName
            )}
            onMouseEnter={() => handleHover(index)}
            onMouseLeave={() => handleHover(null)}
          />
        );
      })}
    </svg>
  );
}
