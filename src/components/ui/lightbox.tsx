import React, { useMemo, useCallback, useState, useEffect } from 'react';

import { AiOutlineClose } from "react-icons/ai";
import Cursor from './cursor';

interface ImageInfo {
    id: number;
    src: string;
    location: string;
    year: number;
    description: string;
}

interface LightboxModalProps {
    image: ImageInfo;
    onClose: () => void;
    onCursorOver: (n: number) => void;
    onCursorLeave: (n: number) => void;
}

const LightboxModal: React.FC<LightboxModalProps> = ({ image, onClose, onCursorOver, onCursorLeave }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setTimeout(onClose, 300);
    };

    return (
        <div className={`fixed flex inset-0 justify-center items-center backdrop-blur-md backdrop-brightness-75 drop-shadow-md z-50 transition-opacity duration-500 ease-in-out 
            ${isVisible ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose}>
            <div 
                className="flex flex-col" 
                onClick={handleClose}
                onMouseOver={()=>onCursorOver(46)} 
                onMouseLeave={()=>onCursorLeave(22)}
            >
                <button 
                    onClick={handleClose} 
                    className="absolute top-2 left-2 font-bold py-2 px-2 rounded" 
                >
                    <AiOutlineClose size={24} className="hover:size-7 duration-100 ease-out text-white"/>
                </button>
                <img src={image.src} alt={image.description} className="max-w-[85vw] max-h-[85vh] m-1 outline outline-white object-scale-down"/>
                <div className="flex bottom-0 justify-between text-white font-medium">
                    <div className="relative bottom-0 left-0">{image.description}</div>
                    <div className="relative bottom-0 right-0 text-right">
                        {image.location}{(image.year !== 0) ? ` (${image.year})` : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LightboxModal;