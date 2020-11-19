import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import styles from "./footer.module.scss";

const Footer = () => {
  const sqlData = useStaticQuery(
    graphql`
      query footerData {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  );

  return (
    <footer className={styles.footer}>
      <p>
        Created by {sqlData.site.siteMetadata.author}, copyright{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
