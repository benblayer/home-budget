import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const list = [
    { label: "About", path: "/about" },
    { label: "Home", path: "/" },
  ];

  return (
    <Fragment>
      <div className='header'>Home Budget</div>
      <div className='navigation-menu'>
        {list.map((navItem) => (
          <Link to={navItem.path}>{navItem.label}</Link>
        ))}
      </div>
    </Fragment>
  );
}
