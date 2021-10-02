
import React from 'react'

export default function Category() {
  let categoriesItem = ["Мясные","Вегетарианская","Гриль","Острые","Закрытые"]
    return (
        <div>
            <div className="categories">
              <ul>
                <li className="active">Все</li>
               {categoriesItem.map((el,index)=>{
                return(<li onClick={()=>{console.log(el)}} key={`${el}_${index}`}>{el}</li>)
               })
                }
              </ul>
            </div>
        </div>
    )
}
