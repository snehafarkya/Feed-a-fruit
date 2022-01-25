import React from 'react'
import image from "./image18.png"
function Navbar() {
    
    return (
        <div className='navbar'>
            <div id="logo">
                <img id="logoo" src={image} alt="efe" height={140} />
                <span className="feed">Feed A Fruit</span>
            </div>
            <ul id='ul'>
              
              
                <li className="li"> Home</li>
                <li className="li">Details</li>
                <li className="li">Healthy Recipes</li>
                <li className="li">Connect</li>
            </ul>
        </div>
    )
}

export default Navbar
