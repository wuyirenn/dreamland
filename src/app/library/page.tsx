"use client"

import React, { useState, useCallback } from 'react';

import Navbar from '../../components/ui/navbar';
import Cursor from '../../components/ui/cursor';
import libraryData from './library-data';

const LibraryPage = () => {
    const [isActive, setIsActive] = useState(false);
    const [radius, setRadius] = useState(20);

    const handleOver = useCallback((n: number) => {
        setIsActive(true);
        setRadius(n);
    }, []);

    const handleLeave = useCallback((n: number) => {
        setIsActive(false);
        setRadius(n);
    }, []);

    return (
        <div className="w-screen min-h-screen bg-white overflow-hidden z-[250]">
            <div onMouseOver={()=>handleOver(46)} onMouseLeave={()=>handleLeave(22)}>
                <Navbar handleMusic={() => {}} isPlaying={false} />
            </div>
            
            <div className="flex flex-col items-center justify-center h-screen">
                <div 
                    className="text-left p-8 h-full w-xscard sm:w-smcard md:w-card my-36"
                >
                    <div 
                        className="text-xs lg:text-sm font-medium text-stone-500 mb-8"
                        onMouseOver={() => handleOver(46)}
                        onMouseLeave={() => handleLeave(22)}
                    >
                        {`* note: titles are shown in Chinese for the works I read in their Chinese translation (highly recommend for works written in East Asian languages)`}
                    </div>
                    {libraryData.map((yearData, yearIndex) => (
                        <div 
                            key={yearIndex} 
                            className="relative top-0 left-0 mb-10"
                            onMouseOver={() => handleOver(46)}
                            onMouseLeave={() => handleLeave(22)}
                        >
                            <h2 className="text-sm sm:text-base md:text-lg text-stone-600/95 font-bold mb-1">{yearData.year}</h2>
                            <div className="text-xs sm:text-sm md:text-base text-stone-500 font-medium">
                                {yearData.reading.map((book, bookIndex) => (
                                    <div key={bookIndex} className={`${book.favorite ? 'font-bold' : 'font-medium'}`}>
                                        <span className={`text-stone-${book.favorite ? '500' : '500/80'}`}>{book.title}</span> | <span className={`text-stone-${book.favorite ? '600/95' : '500'}`}>{book.author}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <Cursor isActive={isActive} radius={radius} />
        </div>
    );
};

export default LibraryPage;

  