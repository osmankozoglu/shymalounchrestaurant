import React from "react";
import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";
import logo from "../../images/main-logo.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import { Dropdown, Space } from "antd";
import { Link } from "react-router-dom";

const items = [
  {
    label: (
      <Link to="/subelerimiz" className="nav-link">
        Şubelerimiz
      </Link>
    ),
    key: "0",
  },
  {
    label: (
      <Link to="/iletisim" className="nav-link">
        İletişim
      </Link>
    ),
    key: "1",
  },
];

export default function Light() {
  const menus = [
    <>
      <Link className="nav-link" to="/">
        Ana Sayfa
      </Link>
      <Link className="nav-link" to="/hakkimizda">
        Hakkımızda
      </Link>
      <Link className="nav-link" to="/menu">
        Menü
      </Link>
      <Link className="nav-link" to="/#">
        <Dropdown menu={{ items }}>
          <Link>
            <Space>Bize Ulaşın</Space>
          </Link>
        </Dropdown>
      </Link>
    </>,
  ];

  const logoImage = [
    <>
      <Link to="/" className="nav-link logo-link">
        <img src={logo} alt="Logo" />
        Shyma Lounch
      </Link>
    </>,
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

  return (
    <div className={"header" || "header-light"}>
      <nav className="desktopNavLinks">
        {logoImage}
        <div className="nav-links">{menus}</div>
      </nav>

      <nav className="mobileNavLinksContainer">
        {logoImage}
        <div
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          className="mobileNavLinks"
        >
          <div className="navLinks">{menus}</div>
        </div>
        <button
          className={showNavLinks ? "open" : "closed"}
          onClick={toggleNavbar}
        >
          {showNavLinks ? (
            <CloseIcon className="iconSize" />
          ) : (
            <MenuIcon className="iconSize" />
          )}
        </button>
      </nav>
    </div>
  );
}
