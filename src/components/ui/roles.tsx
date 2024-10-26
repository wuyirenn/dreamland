import React from 'react';
import { ReactTyped } from "react-typed";

const Roles = () => {
  return (
    <div className="inline">
      <ReactTyped
        strings={["designer", "communicator", "entrepreneur"]}
        typeSpeed={120}
        loop={true}
        startDelay={400}
        backDelay={1500}
        backSpeed={60}
        cursorChar="|"
        showCursor={true}
      />
    </div>
  )
}

export default Roles