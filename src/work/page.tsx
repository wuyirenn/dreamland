"use client"

import React, {useState} from "react";
import Navbar from "@/components/ui/navbar";
import Cursor from "@/components/Cursor";

const Work = () => {

  const [isActive, setIsActive] = useState(false)
  const [radius, setRadius] = useState(20)

  function handleOver (n: number) {
    setIsActive(true);
    setRadius(n)
  }

  function handleLeave (n: number) {
    setIsActive(false);
    setRadius(n)
  }

  return (
    <main className="w-full overflow-auto animate-fadeIn duration-1000">
        <div className="fixed bg-bumblebees bg-cover bg-center bg-no-repeat brightness-75 h-screen w-screen -z-50"></div>
        <div onMouseOver={()=>handleOver(46)} onMouseLeave={()=>handleLeave(22)}>
          <Navbar />
        </div>
        <Cursor isActive={isActive} radius={radius}/>
    </main>
  )
}

export default Work