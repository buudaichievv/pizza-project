import classNames from 'classnames'
import React, { useState } from 'react'

export default function Sort() {
  const [btn,setBtn] = useState(false)
  let click = () =>{
    if (btn == false){
      setBtn(true)
    }
    else{
      setBtn(false)
    }
  }

  let sort = ["популярности","цене","алфавиту"] 
  let [sortItem,setSortItem] = useState(null) 
  let sortActive = (index) =>{
    setSortItem(index)
  }
    return (
        <div>
             <div className="sort">
              <div className="sort__label">
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                  />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={click}>популярности</span>
              </div>
              <div className={classNames(
                {
                  'sort__popup':btn == true
                },
                {
                  'sort__popup_cls':btn == false
                }
                )}>
                <ul>
                  { sort ?
                    sort.map((el,index)=>{
                    return(
                      <li 
                      key={`${el}_${index}`}
                      onClick={()=>{sortActive(index)}}
                      className={`${sortItem === index ? 'active':''}`}
                      >
                        {el}
                      </li>
                    )
                  })
                    : <li>ОШИБКА</li>
                  }
                </ul>
              </div>
            </div>
        </div>
    )

}