import React from 'react'

function Salad() {
    return (
        <div className='recipee'>
        <div className="mainc">
            <div className="thecardd">
            <div className="frontc">
            <h2 className="h2">Fruit salad</h2>
        <img src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Lime-Honey-Fruit-Salad_EXPS_BMMZ20_101081_E10_25_6b-4.jpg?resize=768,768" alt="" height={270} width={300}/>
               
           
            </div>
            <div className="backc">
         <h3 className='h3'>Ingredients</h3>
                <ul id='ull'>
                    <li className='lii'>Fresh fruits</li>
                    <li className='lii'>Honey</li>
                    <li className='lii'>Black Pepper</li>
                    <li className='lii'>Lime juice</li>
                   
                </ul>
                <h3 className='h3'>Method</h3>
                <p className="met">
                    How refreshing it is to have a bowl of fresh fruits?Lime-honey fruit salad will open the pores of mind and give you the <i>"Ehsaas OF Taazgi"</i> </p>
                </div>
                </div>
                </div>
                </div>
    )
}

export default Salad
