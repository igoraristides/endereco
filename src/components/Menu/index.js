import React from "react";
import logo from "../../assets/logo.png";

import Avatar from "../Avatar";
import Link from "./Link";

import { Container, Navigation, Logo, Section } from "./styles";

const links = [
  {
    to: "/extrato",
    label: "Catálogo",
  },
  {
    to: "/transferencia",
    label: "Revisão",
  },
];

const Menu = () => {
  return (
    <>
      <Container>
        <Navigation>
          <Logo src={logo} />
          <Section>
            {links.map(({ to, label }) => (
              <Link key={to} to={to} label={label} className="link" />
            ))}
          </Section>
        </Navigation>
      </Container>
    </>
  );
};

export default Menu;
