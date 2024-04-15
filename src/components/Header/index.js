// Write your JS code here
import './index.css'

import {Link} from 'react-router-dom'

const GetHeader = () => (
  <nav className="navHeader">
    <div className="navContent">
      <img
        className="websiteLogo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="menu">
        <li className="li">
          <Link to="/" className="link">
            <button type="button" className="linkButtons">
              Home
            </button>
          </Link>
        </li>
        <li className="li">
          <Link to="/products" className="link">
            <button type="button" className="linkButtons">
              Products
            </button>
          </Link>
        </li>
        <li className="li">
          <Link to="/cart" className="link">
            <button type="button" className="linkButtons">
              Cart
            </button>
          </Link>
        </li>
        <li className="li2">
          <button type="button" className="logoutButton">
            Logout
          </button>
        </li>
      </ul>

      <button type="button" className="logoutButtonSmall">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="logoutImage"
        />
      </button>
    </div>
    <div className="navButtons">
      <ul className="ul">
        <li className="list">
          <Link to="/" className="link2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="navIcon"
            />
          </Link>
        </li>
        <li className="list">
          <Link to="/products" className="link2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="navIcon"
            />
          </Link>
        </li>
        <li className="list">
          <Link to="/cart" className="link2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="navIcon"
            />
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default GetHeader
