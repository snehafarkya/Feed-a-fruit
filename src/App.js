import React from 'react'
import Apple from './components/Apple'
import Mango from './components/Mango'
import Home from './components/Home'
import Watermelon from './components/Watermelon'
import './App.css';
import imagee from './components/Rectangle.png'
import Banana from './components/Banana'
import Graps from './components/Graps'
import Orange from './components/Orange'
import Clock from './components/Clock'
import Navbar from './components/Navbar' 
import Connect from './components/Connect'
import Recipe from './components/Recipe'

 {/* inline stylin can be done as style = {{property}} */}
     {/* Inline js can be done through {var name} */}
     
export default function App() {
   
 
    return (
        <>
         {/* <div className='App'>
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Detail" element={<Detail />} />
</Routes>
</div> */}
        <Navbar /><br></br>
        <div className="homi">
        <Home />
            <img id='img' src={imagee} alt="imahge"   />
             
            </div>
            <div className="divv">
            <Clock />
         
            </div>
            <h2> List of <span id="span">fruits</span>  </h2>
    
    <h3>
    <ul className='list'>
<div className='div'>
    <li style={{color: "#3D8952"}}>Apple</li>
    <Origin originn = 'Europe' />
        <Apple  />
      
</div>
<div className='div'>
    <li style={{color:"#3D8952"}}>Mango</li>
    <Origin originn = 'India'/>
        <Mango />
    </div>
<div className='div'>
    <li style={{color:"#3D8952"}}>Watermelon</li>
    <Origin originn = 'Africa'/>
        <Watermelon />

</div>
<div className='div'>
    <li style={{color:"#3D8952"}} >Orange </li>
    <Origin originn = 'Southeast Asia'/>
    <Orange />  
</div>
<div className='div'>
    <li style={{color:"#3D8952"}}>Banana</li>
    <Origin originn = 'Southeast Asia'/>
    <Banana />       
</div>
<div className='div'>
    <li style={{color:"#3D8952"}}>Grapes </li>  
    <Origin originn = 'North America'/>
    <Graps />
</div>

        </ul>
    </h3>
    <Recipe />
    <Connect />
</>
    )
}

const Origin = (props) => {
    return <h4>{props.originn}</h4>
}







