import './Food.css';
import food from './Food_list';

import { useState, useEffect } from 'react';

const Food = () => {

  const [cid, setCid] = useState(0);


  return (
    <>
     
    <div className="food__carosaul">
        {food.map((f, index) => {
          return(
              <>
              
                <div className="food__carosaul-list" key={index} >
                  
                      <h4 style= { cid !== index+1 ?   {backgroundImage: "url(" + f.img + ")"}  
                      : 
                      {backgroundColor : f.color}}  onClick={() => {setCid(f.id); }}>{f.title}</h4>
                </div>
              </>
                );
        })}
    </div>
    <button className='food__button'>Next</button>
    
    </>
  )
}

export default Food;