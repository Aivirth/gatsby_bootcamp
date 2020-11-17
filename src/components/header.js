import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

import headerStyles from "./header.module.scss";

const Header = () => {
  const { header, title, navList, activeNavItem } = headerStyles;

  const sqlData = useStaticQuery(
    graphql`
      query headerData {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

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
    <header className={header}>
      <h1>
        <Link to="/" className={title}>
          {sqlData.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={navList}>
          {siteLinks.map((link, index) => {
            return (
              <li key={index}>
                <Link
                  className={headerStyles.navItem}
                  to={link.url}
                  activeClassName={activeNavItem}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
