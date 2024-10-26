import React from "react";


interface ButtonProps {
    children: React.ReactNode
}


const Button: React.FC<ButtonProps> = ({ children }) => {

    return (
        <main>
            <button className='relative text-white font-nunitosans font-bold tracking-wide text-center place-content-center px-4 h-11 w-40 outline outline-white outline-2 hover:bg-gradient-to-r hover:from-cyan-100 hover:to-rose-300 hover:bg-white'
            style={{'transition': 'background-color 450ms'}}>
                {children}
            </button>
        </main>
    
  )
}

export default Button