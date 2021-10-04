
import React, { useState } from 'react'

export default function Category() {
  let [item,setItem] = useState(null)
  let state = {
    activeItem:item
  }
  let onSelectItem = (index) =>{
    setItem(index)
  }
  
  let categoriesItem = ["Мясные","Вегетарианская","Гриль","Острые","Закрытые"]
    return (
        <div>
            <div className="categories">
              <ul>
                <li 
                  className={`${state.activeItem === null ? 'active' : ''}`}
                  onClick={()=>{onSelectItem(null)}}
                >Все</li>
               {categoriesItem.map((el,index)=>{
                return(
                <li 
                  className={`${state.activeItem === index ? 'active' : ''}`}
                  onClick={()=>{onSelectItem(index)}} 
                  key={`${el}_${index}`}>
                    {el}
                </li>)
               })
                }
              </ul>
            </div>
        </div>
    )
}
