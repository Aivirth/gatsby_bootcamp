import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export const currPostQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = props => {
  const postData = props.data.markdownRemark;
  const { title, date } = postData.frontmatter;

  return (
    <Layout>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: postData.html }}></div>
    </Layout>
  );
};

export default Blog;
