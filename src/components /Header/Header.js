import React from 'react'
import Button from '../button/Button'
import logo from '../../img/pizza-logo.svg'
export default function Header() {
    return (
        <div>
            <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="50" src={logo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        <Button></Button>
        </div>
      </div>
        </div>
    )
}
