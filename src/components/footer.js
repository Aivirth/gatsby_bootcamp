import React from "react";
import { graphql, useStaticQuery } from "gatsby";

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
    <footer>
      <p>
        Created by {sqlData.site.siteMetadata.author}, copyright{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
