import React from 'react'
import './Main.css'
import Header from './Header/Header'
import Sort from './Sort/Sort'
import Category from './Category/Category'
import Item from './Item.js/Item'
export default function Main() {
  return (
        <div>
          <div className="wrapper">
              <Header/>
            <div className="content">
              <div className="container">
                <div className="content__top">
                <Category/>
                <Sort/>
                </div>
              <Item/>
              </div>
            </div>
          </div>
        </div>
    )
}
