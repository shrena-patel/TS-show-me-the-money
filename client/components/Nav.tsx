import { useState } from 'react'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import { useAuth0 } from '@auth0/auth0-react'

function Nav() {

  const [burgerVisible, setBurgerVisible] = useState(false)
  const { logout, loginWithRedirect, user } = useAuth0()
  
  const toggleBurger = () => {
    setBurgerVisible((currentBurgerState) => !currentBurgerState)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span
            onClick={toggleBurger}
            className={`navbar-burger burger ${
              burgerVisible ? 'is-active' : ''
            }`}
            data-target="navbarMenuHeroA"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroA"
          className={`navbar-menu ${burgerVisible ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            <IfAuthenticated>
              <p className='username'>{user?.nickname}</p>
              <button
                className="button is-link is-normal"
                onClick={() => logout()}
              >
                Logout</button>
            </IfAuthenticated>
            <IfNotAuthenticated>
              <button 
                className='button is-link is-normal'
                onClick={() => loginWithRedirect()} 
              >
                Login
              </button>
            </IfNotAuthenticated>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav
