"use client"

import React, { useState, useEffect } from 'react';

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
    
    // Memoize the image collection to prevent unnecessary re-renders
    const images = React.useMemo(() => imageCollection, []);

    // Initialize all images as not loaded - moved to useMemo for performance
    const initialLoadState = React.useMemo(() => {
        return images.reduce((acc, img) => {
            acc[img.id] = false;
            return acc;
        }, {} as {[key: number]: boolean});
    }, [images]);
    
    useEffect(() => {
        setLoadedImages(initialLoadState);
        
        // Set images to visible after component mounts
        const timer = setTimeout(() => {
            setImagesVisible(true);
        }, 100);
        
        return () => clearTimeout(timer); // Clean up timeout
    }, [initialLoadState]);

    // Memoize these handlers to prevent recreation on each render
    const openLightbox = React.useCallback((image: ImageData) => {
        setSelectedImage(image);
    }, []);

    const closeLightbox = React.useCallback(() => {
        setSelectedImage(null);
    }, []);

    const handleOver = React.useCallback((n: number) => {
        setIsActive(true);
        setRadius(n);
    }, []);

    const handleLeave = React.useCallback((n: number) => {
        setIsActive(false);
        setRadius(n);
    }, []);

    const handleImageLoad = React.useCallback((id: number) => {
        // Use a timeout to stagger the fade-in effect
        const timer = setTimeout(() => {
            setLoadedImages(prev => ({
                ...prev,
                [id]: true
            }));
        }, id * 50); // Reduced delay for better performance
        
        return () => clearTimeout(timer); // Clean up timeout
    }, []);

    // Preload images with cleanup
    useEffect(() => {
        const imageLoaders: HTMLImageElement[] = [];
        
        // Preload all images
        images.forEach((image) => {
            const img = new Image();
            img.src = image.src;
            img.onload = () => handleImageLoad(image.id);
            imageLoaders.push(img);
        });
        
        // Cleanup function to prevent memory leaks
        return () => {
            imageLoaders.forEach(img => {
                img.onload = null;
            });
        };
    }, [images, handleImageLoad]);

    return (
        <div className="min-h-screen overflow-hidden z-[250]">
            <div className="fixed bg-white h-screen w-screen -z-[100]"></div>
            <div onMouseOver={()=>handleOver(46)} onMouseLeave={()=>handleLeave(22)}>
                <Navbar handleMusic={() => {}} isPlaying={false} />
            </div>
            <div className="gallery-container p-4 max-w-xscard sm:max-w-smcard md:max-w-card mx-auto">
                <div className="my-36 columns-1 md:columns-2 lg:columns-3 gap-4">
                    {images.map((image) => (
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
                                    width="100%"
                                    height="auto"
                                />
                            </div>
                        </div>
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
