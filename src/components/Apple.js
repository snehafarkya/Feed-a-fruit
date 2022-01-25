import React from 'react'
import { useState } from 'react/cjs/react.development'

export default function Apple() {
//     const names =[ {
//         id:1 , name: 'orangee' },
//     {id:2, name: 'mango'},
// ]
const [show, setShow] = useState()
    

    return (
        <>
        <img src="https://images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-apples-1296x728-feature.jpg" alt="" height={200} width={300}/>
        {/* {names.map((item) => <p key={item.id}>{item.name}</p>) } */}
        <div className="showw">
            {
                show?<p className='p'>Apples are a popular fruit, containing antioxidants, vitamins, dietary fiber, and a range of other nutrients. Due to their varied nutrient content, they may help prevent several health conditions.</p>:null

            }
        </div>
        <button onClick={()=>setShow(!show)}>Know More</button>
       
        
         </>
    )
}
