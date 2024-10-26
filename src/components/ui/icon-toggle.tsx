"use client"

import React, { useState } from "react";
import Image from "next/image";

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

    const randomStartIndex = Math.floor(Math.random() * imageUrls.length)
    const randomStart = imageUrls[randomStartIndex]
    const [imageUrl, setImageUrl] = useState<string>(randomStart);

    const generateRandomImage = () => {
        const randomIndex = 
            Math.floor(Math.random() * imageUrls.length);
        setImageUrl(imageUrls[randomIndex]);
    }
    
    return (
        <button onClick={generateRandomImage} className="opacity-0 animate-fadeIn duration-700 delay-600">
            <Image src={imageUrl} width="32" height="32" style={{objectFit: "contain", borderRadius:"4px", borderColor:"white", borderWidth:"1px"}} alt="Icon image"/>
        </button>
    )

}

export default IconToggle;