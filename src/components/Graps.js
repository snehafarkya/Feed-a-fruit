import React,{useState} from 'react'

export default function Graps() {
    const [show, setShow] = useState()
    return (
        <>
        <img src="https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/green-grapes-bunch.jpg?fit=1200%2C879&ssl=1" alt="" height={200} width={300} />
        <div className="showw">
            {
                show?<p className='p'>Grapes come in different colors and forms. There are red, green, and purple grapes, seedless grapes, grape jelly, grape jam and grape juice, raisins, currents, and sultanas, not to mention wine.</p>
                :null

            }
        </div>
        <button onClick={()=>setShow(!show)}>Know More</button>
       
        
         </>
    )
}
