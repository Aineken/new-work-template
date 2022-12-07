import React from "react";
import { Link } from "react-router-dom";

import { Container, NavLink } from "./HeaderStyled";

function Header() {
  return (
    <Container>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <NavLink main>Dashboard</NavLink>
      </Link>
    </Container>
  );
}

export default Header;
