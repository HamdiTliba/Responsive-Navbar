import React from "react";

const NavItems = ({ text, active, onClick }) => {
  return (
    <li>
      <a href="#" className={`${active}`} onClick={onClick}>
        {text}
      </a>
    </li>
  );
};

export default NavItems;
