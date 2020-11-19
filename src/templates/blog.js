import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

// export const currPostQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `;

export const currPostQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`;

const Blog = props => {
  const { title, publishedDate } = props.data.contentfulBlogPost;
  return (
    <Layout>
      <h1>{title}</h1>
      <p>{publishedDate}</p>
    </Layout>
  );
};

export default Blog;
