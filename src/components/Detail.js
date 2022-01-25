import React from 'react'


function Detail() {
    return (
<>
<h2> List of fruits</h2>
    
    <h3>
    <ul className='list'>
<div className='div'>
    <li style={{color: "white"}}>Apple</li>
    <Origin originn = 'Europe' />
        <Apple  />
      
</div>
<div className='div'>
    <li style={{color:"white"}}>Mango</li>
    <Origin originn = 'India'/>
        <Mango />
    </div>
<div className='div'>
    <li style={{color:"white"}}>Watermelon</li>
    <Origin originn = 'Africa'/>
        <Watermelon />

</div>
<div className='div'>
    <li style={{color:"white"}} >Orange </li>
    <Origin originn = 'Southeast Asia'/>
    <Orange />  
</div>
<div className='div'>
    <li style={{color:"white"}}>Banana</li>
    <Origin originn = 'Southeast Asia'/>
    <Banana />       
</div>
<div className='div'>
    <li style={{color:"white"}}>Grapes </li>  
    <Origin originn = 'North America'/>
    <Graps />
</div>

        </ul>
    </h3>
</>
    )
}

export default Detail
