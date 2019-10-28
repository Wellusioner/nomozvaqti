import React from 'react'
import dua from '../assets/images/dua.svg'

function Header() {
  return (
    <header>
      <nav className="navbar navbar-light bg-light ">
        <div className="container">
          <span className="navbar-brand" style={{ fontWeight: '600'}}>
          	<img width="50" src={dua} alt="Muslim"/>
          	{'  '}
          	Namoz Vaqti
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Header;