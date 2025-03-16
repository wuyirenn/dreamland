"use client"

import React, { useState, useEffect, useCallback, useMemo } from 'react';

import Navbar from '../../components/ui/navbar';
import LightboxModal from '../../components/ui/lightbox';
import imageCollection from './image-data';
import Cursor from '../../components/ui/cursor';

// Define proper types for your image data
interface ImageData {
  src: string;
  description: string;
  location: string;
  year: number;
  id: number;
}

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
    const [isActive, setIsActive] = useState(false);
    const [radius, setRadius] = useState(20);
    const [loadedImages, setLoadedImages] = useState<{[key: number]: boolean}>({});
    const [imagesVisible, setImagesVisible] = useState(false);

    // Memoize the initial load state to avoid recalculation
    const initialLoadState = useMemo(() => {
        return imageCollection.reduce((acc, img) => {
            acc[img.id] = false;
            return acc;
        }, {} as {[key: number]: boolean});
    }, []);

    // Initialize all images as not loaded
    useEffect(() => {
        setLoadedImages(initialLoadState);
        
        // Set images to visible after component mounts
        const timer = setTimeout(() => {
            setImagesVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, [initialLoadState]);

    const openLightbox = useCallback((image: ImageData) => {
        setSelectedImage(image);
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const handleOver = useCallback((n: number) => {
        setIsActive(true);
        setRadius(n);
    }, []);

    const handleLeave = useCallback((n: number) => {
        setIsActive(false);
        setRadius(n);
    }, []);

    const handleImageLoad = useCallback((id: number, index: number) => {
        // Use a timeout to stagger the fade-in effect
        const timer = setTimeout(() => {
            setLoadedImages(prev => ({
                ...prev,
                [id]: true
            }));
        }, index * 100); // Stagger by index, not by id
        
        return () => clearTimeout(timer);
    }, []);

    // Memoize images array to prevent unnecessary re-renders
    const images = useMemo(() => imageCollection, []);

    // Preload images
    useEffect(() => {
        // Create an array to track timeouts for cleanup
        const timeouts: NodeJS.Timeout[] = [];
        
        // Preload all images
        images.forEach((image, index) => {
            const img = new Image();
            img.src = image.src;
            img.onload = () => {
                const timeout = setTimeout(() => {
                    setLoadedImages(prev => ({
                        ...prev,
                        [image.id]: true
                    }));
                }, index * 100);
                timeouts.push(timeout);
            };
        });
        
        // Cleanup timeouts on unmount
        return () => {
            timeouts.forEach(clearTimeout);
        };
    }, [images]);

    // Memoize the gallery items to prevent unnecessary re-renders
    const galleryItems = useMemo(() => {
        return images.map((image) => (
            <div 
                key={image.id} 
                className="mb-4 break-inside-avoid w-full"
                style={{ display: 'inline-block', width: '100%' }}
            >
                <div className="relative">
                    <img
                        src={image.src}
                        alt={image.description}
                        className={`w-full h-auto object-cover rounded-lg shadow-md transition-opacity duration-1000 ease-in-out ${loadedImages[image.id] && imagesVisible ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => openLightbox(image)}
                        onMouseOver={() => handleOver(46)}
                        onMouseLeave={() => handleLeave(22)}
                        loading="lazy"
                    />
                </div>
            </div>
        ));
    }, [images, loadedImages, imagesVisible, openLightbox, handleOver, handleLeave]);

    return (
        <div className="min-h-screen overflow-hidden z-[250]">
            <div className="fixed bg-white h-screen w-screen -z-[100]"></div>
            <div onMouseOver={()=>handleOver(46)} onMouseLeave={()=>handleLeave(22)}>
                <Navbar handleMusic={() => {}} isPlaying={false} />
            </div>
            <div className="gallery-container p-4 max-w-xscard sm:max-w-smcard md:max-w-card mx-auto">
                <div className="my-36 columns-1 md:columns-2 lg:columns-3 gap-4">
                    {galleryItems}
                </div>
            </div>
            {selectedImage && <LightboxModal 
                image={selectedImage as ImageData} 
                onClose={closeLightbox} 
                onCursorOver={handleOver} 
                onCursorLeave={handleLeave}
            />}
            <Cursor isActive={isActive} radius={radius} />
        </div>
    );
};

export default GalleryPage;
