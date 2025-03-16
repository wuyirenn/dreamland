"use client"

import React, { useState, useCallback } from 'react';
import Navbar from '../../components/ui/navbar';
import Cursor from '../../components/ui/cursor';

const ComingSoonPage = () => {
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
                    className="text-left p-8 max-w-xscard sm:max-w-smcard md:max-w-card text-stone-500"
                    onMouseOver={() => handleOver(46)}
                    onMouseLeave={() => handleLeave(22)}
                >
                    <div className="text-sm lg:text-base  font-medium">{`Coming soon. Yes, I'm procrastinating. Stay tuned!`}</div>
                    <div className="text-xs lg:text-sm font-normal">{`P.S. Check out my photography and composites while you wait.`}</div>
                </div>
            </div>
            
            <Cursor isActive={isActive} radius={radius} />
        </div>
    );
};

export default ComingSoonPage;
