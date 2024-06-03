import React from "react";
import Footer from "components/footers/Footer.js";
import Header from "components/headers/light.js";
import { Image } from "antd";
import menu1 from "./images/menus/menu1.jpg";
import menu2 from "./images/menus/menu2.jpg";
import menu3 from "./images/menus/menu3.jpg";
import menu4 from "./images/menus/menu4.jpg";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import { Link } from "react-router-dom";

export default function Menu() {
  const carteMenu = "/pdf/carte-menu.pdf"
  const drinkMenu = "/pdf/drink-menu.pdf"
  const fixMenu = "/pdf/fix-menu.pdf"
  const invitationMenu = "/pdf/invitation-menu.pdf"

  return (
    <AnimationRevealPage>
      <Header />
      <div className="container">
        <div className="twoColumn">
          <div className="menuBox">
            <Link to={carteMenu} target="_blank"><Image src={`${menu1}`} preview={false}/></Link>
            <Link to={drinkMenu} target="_blank"><Image src={`${menu2}`} preview={false}/></Link>
            <Link to={fixMenu} target="_blank"><Image src={`${menu4}`} preview={false}/></Link>
            <Link to={invitationMenu} target="_blank"><Image src={`${menu3}`} preview={false}/></Link>
          </div>
        </div>
      </div>
      <Footer/>
    </AnimationRevealPage>
  );
}
