import React, { useEffect, useState } from "react";
import NavItems from "./NavItems";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const ResponsiveNav = () => {
  const [pageTitle, setPageTitle] = useState("");
  const [showElement, setShowElement] = useState({
    navbar: true,
    hamburrgerIcon: false,
    closeIcon: false,
    navOpen: false,
  });
  useEffect(() => {
    window.onresize = () => {
      let windowWidth = window.innerWidth;

      windowWidth > 550 &&
        setShowElement({
          navbar: true,
          hamburrgerIcon: false,
          closeIcon: false,
          navOpen: false,
        });
      windowWidth < 550 &&
        setShowElement({
          navbar: false,
          hamburrgerIcon: true,
          closeIcon: false,
          navOpen: false,
        });
    };
  });
  const openNav = () => {
    setShowElement({
      navbar: true,
      hamburrgerIcon: false,
      closeIcon: true,
      navOpen: true,
    });
  };
  const closeNav = () => {
    setShowElement({
      navbar: false,
      hamburrgerIcon: true,
      closeIcon: false,
      navOpen: false,
    });
  };

  const handleActive = (e) => {
    document
      .querySelectorAll("a")
      .forEach((navlink) => navlink.classList.remove("active"));
    e.target.classList.add("active");
    setPageTitle(e.target.innerText);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <nav
        style={{ position: "relative" }}
        className={`${showElement.navOpen && "open-nav"}`}>
        <div className="logo">
          <a href="/">
            <h1>Hamdi Tliba Logo</h1>
          </a>
        </div>
        <div className="all-navItems">
          {showElement.hamburrgerIcon && (
            <div
              style={{
                fontSize: "30px",
                cursor: "pointer",
                opacity: "0.6",
                position: "absolute",
                right: "25px",
                top: "25px",
              }}>
              <AiOutlineMenu onClick={openNav} />
            </div>
          )}
          {showElement.closeIcon && (
            <div
              style={{
                fontSize: "30px",
                cursor: "pointer",
                opacity: "0.6",
                position: "absolute",
                right: "25px",
                top: "25px",
              }}>
              <AiOutlineClose onClick={closeNav} />
            </div>
          )}

          {showElement.navbar ? (
            <ul className={`${showElement.navOpen && "open-nav"}`}>
              <NavItems
                text={"Home"}
                active={"active"}
                onClick={handleActive}
              />
              <NavItems text={"About"} active={""} onClick={handleActive} />
              <NavItems text={"Contact"} active={""} onClick={handleActive} />
            </ul>
          ) : null}
        </div>
      </nav>
      <h1>{!pageTitle ? "Home" : pageTitle}</h1>
    </div>
  );
};

export default ResponsiveNav;
