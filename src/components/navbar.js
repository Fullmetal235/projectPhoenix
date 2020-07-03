import React from "react";
import { Link } from "react-router-dom";
import logo from '../logo.svg'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
      {/*https://www.iconfinder.com/icons/5912565/footwear_group_human_people_shoe_shoes_woman_icon creative commons (Atribution 3.0 unported); https://www.iconfinder.com/lifengquan52*/}
      <Link to='/'>
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">Products
          </Link>
        </li>

      </ul>
      <Link to='cart' className='ml-auto'>
        <button>
          <i className="fas fa-cart-plus" />
        </button>
      </Link>
    </nav >

  );
}

export default Navbar; 
