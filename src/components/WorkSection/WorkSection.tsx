"use client"
import React, { useCallback } from "react";
import Image from "next/image";
import { useCursor } from "@/context/CursorContext";
import styles from './WorkSection.module.css';

const WorkSection = () => {
  const { setCursorVariant } = useCursor();
  const images = ["/work-1.webp", "/work-2.webp", "/work-3.webp", "/work-4.webp"];

  // Optimize scroll handler
  const handleMouseEnter = useCallback(() => {
    if (window.innerWidth > 768) {
      setCursorVariant('work');
    }
  }, [setCursorVariant]);

  const handleMouseLeave = useCallback(() => {
    if (window.innerWidth > 768) {
      setCursorVariant('default');
    }
  }, [setCursorVariant]);

  return (
    <section className={styles.workSection}>
      <div 
        style={{
          height: `${(images.length + 1) * 100}vh`,
          position: 'relative',
          marginTop: '-120px',
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={styles.imageContainer}
            style={{
              top: `${index * 50 + 80}px`,
              zIndex: images.length + index,
            }}
          >
            <Image
              src={src}
              alt={`Work ${index + 1}`}
              fill
              className={styles.image}
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="90vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
