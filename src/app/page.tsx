"use client"

import React, { useState, useEffect, useRef } from "react";
import Navbar from "@/components/ui/navbar";
import Intro from "@/components/cards/intro";
import AboutMe from "@/components/cards/about-me";
import Work from "@/components/cards/work";
import Contact from "@/components/cards/contact";
import Cursor from "@/components/ui/cursor";
import Button from "@/components/ui/button";
import ShootingStars from "@/components/ui/shooting-stars";
import StarsBackground from "@/components/ui/stars-background";

export default function Home() {

  const [isActive, setIsActive] = useState(false)
  const [radius, setRadius] = useState(20)
  const [start, setStart] = useState(false)
  const [isPlaying, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // states for cursor
  function handleOver (n: number) {
    setIsActive(true);
    setRadius(n)
  }

  function handleLeave (n: number) {
    setIsActive(false);
    setRadius(n)
  }

  // initialize music
  useEffect(() => {
    audioRef.current = new Audio("/assets/music/birdsong.mp3");
    audioRef.current.loop = true

    return () => {
      // cleanup: pause and reset audio when the component unmounts
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const playAudio = async () => {
      const audio = audioRef.current

      try {
        if (audio && isPlaying) {
          await audio.play();
          console.log('Playing audio');
        } else if (audio) {
          audio.pause(); ; 
          console.log('Audio paused');
        }
      } catch (error) {
        console.error('Error playing audio:', error);
      }
    };

    playAudio();
  }, [isPlaying]);

  function toggleMusic() {
    setPlaying(prev => !prev)
  }

  function musicStart() {
    setStart(true)
    toggleMusic()
  }
  

  // block 1: 'start' page
  // block 2: home page
  // + cursor
  return (
    <main>
      <div className={`flex w-full h-[100vh] items-center justify-center select-none cursor-crosshair ${start ? 'hidden' : 'visible'}`}>
        <ShootingStars />
        <StarsBackground />
        <div className="fixed bg-stars bg-cover bg-center bg-no-repeat h-screen w-screen -z-[100] transition-opacity animate-fadeIn duration-1000"
          style={{
            filter: "brightness(0.6) contrast(2) saturate(2) grayscale(100%)"
          }}>
        </div>
        <div className="flex flex-col items-center z-50">
          <div className="opacity-0 animate-fadeIn delay-500 duration-1000" onClick={musicStart}>
            <Button>START</Button>
          </div>
          <a className="fixed bottom-20 underline text-white font-nunitosans opacity-0 animate-fadeIn delay-1000 duration-1000" 
            onClick={()=>setStart(true)} 
            href="#">enter without audio
          </a>
        </div>  
      </div>
      
      <div className={`relative w-full h-[400vh] select-none cursor-crosshair ${start ? 'visible' : 'hidden'}`}>
        <div className="fixed bg-odyssey bg-cover bg-center bg-no-repeat h-screen w-screen -z-[100] transition-opacity animate-fadeIn duration-700"></div>
        <div onMouseOver={()=>handleOver(46)} onMouseLeave={()=>handleLeave(22)}>
          <Navbar handleMusic={toggleMusic} isPlaying={isPlaying}/>
        </div>
        <div id="/" className="flex flex-col w-full h-[100vh] items-center justify-center">
          <div className="max-w-smcard md:max-w-card" onMouseOver={()=>handleOver(240)} onMouseLeave={()=>handleLeave(22)}>
            <Intro />
          </div> 
        </div>
        <div className="flex flex-col w-full h-[100vh] items-center justify-center">
          <div className="max-w-smcard md:max-w-card" onMouseOver={()=>handleOver(240)} onMouseLeave={()=>handleLeave(22)}>
            <AboutMe />
          </div> 
        </div>
        <div id="work" className="flex flex-col w-full h-[100vh] items-center justify-center">
          <div className="max-w-smcard md:max-w-card" onMouseOver={()=>handleOver(240)} onMouseLeave={()=>handleLeave(22)}>
            <Work />
          </div> 
        </div>
        <div id="contact" className="flex flex-col w-full h-[100vh] items-center justify-center">
          <div className="max-w-smcard md:max-w-card" onMouseOver={()=>handleOver(240)} onMouseLeave={()=>handleLeave(22)}>
            <Contact />
          </div> 
        </div>
      </div>

      <Cursor isActive={isActive} radius={radius}/>
    </main>
  );
}
