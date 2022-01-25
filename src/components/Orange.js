import React,{useState} from 'react'

export default function Orange() {
    const [show, setShow] = useState()
    return (
        <>
        <img src="https://www.rd.com/wp-content/uploads/2017/12/01_oranges_Finally%E2%80%94Here%E2%80%99s-Which-%E2%80%9COrange%E2%80%9D-Came-First-the-Color-or-the-Fruit_691064353_Lucky-Business.jpg" alt="" height={200} width={300} />
        
        <div className="showw">
            {
                show?<p className='p'>Oranges are a type of low calorie, highly nutritious citrus fruit. As part of a healthful and varied diet, oranges contribute to strong, clear skin and can help lower a person’s risk of many conditions.</p>
                :null

            }
        </div>
        <button onClick={()=>setShow(!show)}>Know More</button>
       
        
         </>
    )
}
