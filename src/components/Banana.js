import React,{useState} from 'react'

export default function Banana() {
    const [show, setShow] = useState() 
    return (
        <>
        <img src="https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg" alt="" height={200} width={300} />

        <div className="showw">
            {
                show?<p className='p'>Bananas are one of the most popular fruits worldwide. They contain essential nutrients that can have a protective impact on health.</p>:null

            }
        </div>
        <button onClick={()=>setShow(!show)}>Know More</button>
        </>
    )
}
