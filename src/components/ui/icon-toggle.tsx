"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const imageUrls = 
    [
        "/assets/icons/icon0.jpg",
        "/assets/icons/icon1.jpg",
        "/assets/icons/icon2.jpg",
        "/assets/icons/icon3.jpg",
        "/assets/icons/icon4.jpg",
        "/assets/icons/icon5.jpg",
    ]

const IconToggle: React.FC = () => {
    const pathname = usePathname();
    const [imageUrl, setImageUrl] = useState<string>(imageUrls[Math.floor(Math.random() * imageUrls.length)]);

    const generateRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * imageUrls.length);
        setImageUrl(imageUrls[randomIndex]);
    }
    
    return (
        <button onClick={generateRandomImage} className="opacity-0 animate-fadeIn duration-700 delay-600">
            <Image 
                src={imageUrl} 
                width="32" 
                height="32" 
                style={{
                    objectFit: "contain", 
                    borderRadius: "4px", 
                    borderColor: pathname === "/" ? "white" : "#a6a09b",
                    borderWidth: "1px",
                    borderStyle: "solid"
                }} 
                alt="Icon image"
            />
        </button>
    )
}

export default IconToggle;