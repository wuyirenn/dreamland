"use client"

import React, { useState } from 'react';

import Navbar from '../../components/ui/navbar';
import LightboxModal from '../../components/ui/lightbox';
import imageCollection from './image-data';
import Cursor from '../../components/ui/cursor';

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [radius, setRadius] = useState(20);

    const openLightbox = (image: any) => {
        setSelectedImage(image);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const handleOver = (n: number) => {
        setIsActive(true);
        setRadius(n);
    };

    const handleLeave = (n: number) => {
        setIsActive(false);
        setRadius(n);
    };

    return (
        <div className="min-h-screen overflow-hidden z-[250]">
            <div className="fixed bg-white h-screen w-screen -z-[100]"></div>
            <div onMouseOver={()=>handleOver(46)} onMouseLeave={()=>handleLeave(22)}>
                <Navbar handleMusic={() => {}} isPlaying={false} />
            </div>
            <div className="gallery-container p-4 max-w-card sm:max-w-smcard md:max-w-xscard mx-auto">
                <div className="gallery-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-36">
                    {imageCollection.map(image => (
                        <img
                            key={image.id} 
                            src={image.src} 
                            alt={image.description} 
                            className="w-full h-auto object-cover rounded-lg shadow-md"
                            onClick={() => openLightbox(image)}
                            onMouseOver={() => handleOver(46)} 
                            onMouseLeave={() => handleLeave(22)}
                        />
                    ))}
                </div>
            </div>
            {selectedImage && <LightboxModal 
                image={selectedImage} 
                onClose={closeLightbox} 
                onCursorOver={handleOver} 
                onCursorLeave={handleLeave}
            />}
            <Cursor isActive={isActive} radius={radius} />
        </div>
    );
};

export default GalleryPage;
