import React from "react";
import { Link } from "gatsby";

const Header = () => {
  const siteLinks = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/contact",
      name: "Contact",
    },
    {
      url: "/about",
      name: "About",
    },
    {
      url: "/blog",
      name: "Blog",
    },
  ];
  return (
    <header>
      <h1>Site title PH</h1>
      <nav>
        <ul>
          {siteLinks.map(link => {
            return (
              <li>
                <Link to={link.url}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
