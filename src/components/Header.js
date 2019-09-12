import React, { Component } from "react";

import logo from "../assets/perfil.jpg";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Face</h1>
        <a href="#" className="perfil">
          <span>Meu perfil</span>
          <img src={logo} className="logo" alt="logo pefil" />
        </a>
      </header>
    );
  }
}

export default Header;
