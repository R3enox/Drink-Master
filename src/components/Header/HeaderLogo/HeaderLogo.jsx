import { IMG } from "../../../../images";
import * as SC from "../HeaderLogo/HeaderNav.styled"

export const HeaderLogo = () => {
    return (
      <SC.LogoLink>
        <img src={IMG.logo} width="22" height="22" alt="logo" />
        <SC.LogoTitle>Drink Master</SC.LogoTitle>
      </SC.LogoLink>
    );
}