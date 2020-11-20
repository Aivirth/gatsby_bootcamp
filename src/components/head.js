import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;
  const { pageTitle } = props;

  const pageFullTitle = `${title} - ${pageTitle}`;

  return <Helmet title={pageFullTitle} />;
};

export default Head;
