import React from 'react'

import Frostyice from './fruits/Frostyice'
import Fruitcream from './fruits/Fruitcream'
import Kabobs from './fruits/Kabobs'
import Parfait from './fruits/Parfait'
import Popsicle from './fruits/Popsicle'
import Salad from './fruits/Salad'
import Navbar from './Navbar'

function Recipe() {
    return (
        <>
          
           <h2><span id="span">Food</span> Zone</h2>
           <div className="grid">
           <Fruitcream /> 
           <Salad />
           <Popsicle />
           <Kabobs />
           <Parfait />
           <Frostyice />
      
           </div>
        </>
    )
}

export default Recipe
