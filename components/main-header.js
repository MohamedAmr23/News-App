import React from 'react'
import NavLink from './nav-link'

const MainHeader = () => {
  return (
    <header id='main-header'>
        <div id="logo">
        <NavLink href="/">NextNews</NavLink>
      </div>
      <ul>
          <li>
                <NavLink href={'/news'}>News</NavLink>
          </li>
          <li>
                <NavLink href='/archive'>Archive</NavLink>
          </li>
      </ul>
    </header>
  )
}

export default MainHeader