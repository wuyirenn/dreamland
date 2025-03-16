"use client"

import React, { useState, useEffect, useRef, useMemo, useCallback, Suspense } from "react";
import Navbar from "@/components/ui/navbar";
import Intro from "@/components/cards/intro";
import AboutMe from "@/components/cards/about-me";
import Work from "@/components/cards/work";
import Cursor from "@/components/ui/cursor";
import Button from "@/components/ui/button";
import ShootingStars from "@/components/ui/shooting-stars";
import StarsBackground from "@/components/ui/stars-background";
import { useSearchParams } from "next/navigation";

// Create a separate component that uses useSearchParams
function HomeContent() {
  const searchParams = useSearchParams();
  const skipIntro = searchParams.get('skipIntro') === 'true';

  const [isActive, setIsActive] = useState(false);
  const [radius, setRadius] = useState(20);
  const [start, setStart] = useState(skipIntro);
  const [isPlaying, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio only once with lazy loading
  useEffect(() => {
    // Only create the audio element when needed
    if (isPlaying && !audioRef.current) {
      audioRef.current = new Audio("/assets/music/birdsong.mp3");
      audioRef.current.loop = true;
      audioRef.current.preload = "auto";
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [isPlaying]);

  // Handle audio playback
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Error playing audio:', error);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Memoize event handlers
  const handleOver = useCallback((n: number) => {
    setIsActive(true);
    setRadius(n);
  }, []);

  const handleLeave = useCallback((n: number) => {
    setIsActive(false);
    setRadius(n);
  }, []);

  const toggleMusic = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  const musicStart = useCallback(() => {
    setStart(true);
    setPlaying(true);
  }, []);

  const skipAudio = useCallback(() => {
    setStart(true);
  }, []);

  // Memoize components that don't need to re-render often
  const cursorElement = useMemo(() => 
    <Cursor isActive={isActive} radius={radius} />, 
    [isActive, radius]
  );

  // Optimize intro screen rendering
  const introScreen = useMemo(() => {
    if (start) return null; // Don't render at all if not needed
    
    return (
      <div className="flex w-full h-[100vh] items-center justify-center select-none transition-opacity duration-1000 ease-in-out opacity-100">
        <ShootingStars />
        <StarsBackground />
        <div className="flex flex-col items-center z-50">
          <div className="opacity-0 animate-fadeIn delay-500 duration-1000" onClick={musicStart}>
            <Button>START</Button>
          </div>
          <a className="fixed bottom-20 underline text-white font-nunitosans opacity-0 animate-fadeIn delay-1000 duration-1000" 
            onClick={skipAudio} 
            href="#">
            enter without audio
          </a>
        </div>  
      </div>
    );
  }, [start, musicStart, skipAudio]);

  // Memoize the navbar to prevent unnecessary re-renders
  const navbar = useMemo(() => (
    <div onMouseOver={() => handleOver(46)} onMouseLeave={() => handleLeave(22)}>
      <Navbar handleMusic={toggleMusic} isPlaying={isPlaying}/>
    </div>
  ), [handleOver, handleLeave, toggleMusic, isPlaying]);

  // Memoize content sections
  const contentSections = useMemo(() => (
    <>
      <div id="/" className="flex flex-col w-full min-h-[100vh] items-center justify-center">
        <div className="max-w-xscard sm:max-w-smcard md:max-w-card my-12" 
             onMouseOver={() => handleOver(240)} 
             onMouseLeave={() => handleLeave(22)}>
          <Intro />
        </div> 
      </div>
      <div id="about" className="flex flex-col w-full min-h-[100vh] items-center justify-center">
        <div className="max-w-xscard sm:max-w-smcard md:max-w-card my-12" 
             onMouseOver={() => handleOver(240)} 
             onMouseLeave={() => handleLeave(22)}>
          <AboutMe />
        </div> 
      </div>
      <div id="work" className="flex flex-col w-full min-h-[100vh] items-center justify-center">
        <div className="max-w-xscard sm:max-w-smcard md:max-w-card my-12 overflow-x-hidden" 
             onMouseOver={() => handleOver(240)} 
             onMouseLeave={() => handleLeave(22)}>
          <Work />
        </div> 
      </div>
    </>
  ), [handleOver, handleLeave]);

  // Optimize main content rendering
  const mainContent = useMemo(() => {
    if (!start) return null; // Don't render at all if not needed
    
    return (
      <div className="absolute top-0 left-0 right-0 w-full h-[300vh] select-none overflow-y-auto transition-opacity duration-1000 ease-in-out opacity-0 animate-fadeIn">
        <div className="fixed bg-odyssey bg-cover bg-center bg-no-repeat h-screen w-screen -z-[100] transition-opacity animate-fadeIn duration-700"></div>
        {navbar}
        {contentSections}
      </div>
    );
  }, [start, navbar, contentSections]);

  return (
    <main className="">
      {introScreen}
      {mainContent}
      {cursorElement}
    </main>
  );
}

// Main component with Suspense boundary
export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
