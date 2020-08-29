import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./button";
function Navbar() {
  return (
    <NavWrap className="navbar navbar-expand-sm b navbar-dark px-sm-5">
      {/*https://www.iconfinder.com/icons/5912565/footwear_group_human_people_shoe_shoes_woman_icon creative commons (Atribution 3.0 unported); https://www.iconfinder.com/lifengquan52*/}
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="Cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <i className="fas fa-cart-plus" />
          </span>
          my cart
        </ButtonContainer>
      </Link>
    </NavWrap>
  );
}
const NavWrap = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transforn: capitalize !important;
  }
`;

export default Navbar;
