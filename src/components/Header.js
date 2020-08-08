import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink activeClassName="is-active" exact to="/">
        Dashboard
      </NavLink>
      <NavLink activeClassName="is-active" to="/create">
        Create Page
      </NavLink>
    </header>
  );
};

export default Header;
