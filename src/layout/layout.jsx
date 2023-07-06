import React from "react";
import { NavLink } from "react-router-dom";
import { Wrapper, Nav } from "./styled";
import { Outlet } from "react-router-dom";

export default function Catalog({ children }) {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">Каталог</NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
