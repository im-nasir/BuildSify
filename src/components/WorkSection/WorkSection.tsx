"use client"
import React, { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCursor } from "@/context/CursorContext";
import styles from './WorkSection.module.css';

const WorkSection = () => {
  const router = useRouter();
  const { setCursorVariant } = useCursor();
  const images = [
    { src: "/work-1.webp", projectPath: "/projects/1" },
    { src: "/work-2.webp", projectPath: "/projects/2" },
    { src: "/work-3.webp", projectPath: "/projects/3" },
    { src: "/work-4.webp", projectPath: "/projects/4" }
  ];

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

  const handleImageClick = (projectPath: string) => {
    router.push(projectPath);
  };

  return (
    <section className={styles.workSection}>
      <div 
        style={{
          height: `${(images.length + 1) * 100}vh`,
          position: 'relative',
          marginTop: '-120px',
        }}
      >
        {images.map((item, index) => (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleImageClick(item.projectPath)}
            className={styles.imageContainer}
            style={{
              top: `${index * 50 + 80}px`,
              zIndex: images.length + index,
              cursor: 'pointer'
            }}
          >
            <Image
              src={item.src}
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
