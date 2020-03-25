import React from "react";
import { ReactComponent as Logo } from "../../assets/virus.svg";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/dataPage'>DATA PAGE</OptionLink>
      <OptionLink to="/record">RECORD ACTIVITY</OptionLink>
      {/* <OptionLink to="/export">EXPORT DATA</OptionLink> */}
      <OptionLink to="/signin">SIGN IN</OptionLink>
    </OptionsContainer>
  </HeaderContainer>
);

export default Header;
