import React, { useState } from 'react'
import "./Navbar.scss"

export const Navbar = ({changeDirection}) => {
    const [isEng,setIsEng] = useState(true);
    let changeLanguageHandler = ()=>{
        setIsEng(!isEng);
        changeDirection();
    }
  return (
    <nav>
        <div className="language">
            {isEng?
                <>
                <span onClick={changeLanguageHandler} className='en active'>En</span>
                <span onClick={changeLanguageHandler} className='ar'>Ar</span>
                </>:
                <>
                <span onClick={changeLanguageHandler} className='en'>En</span>
                <span onClick={changeLanguageHandler} className='ar active'>Ar</span>
                </>
            }
        </div>
    </nav>
  )
}
