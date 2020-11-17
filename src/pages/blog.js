import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery } from "gatsby";

const BlogPage = () => {
  const blogPostsQuery = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            }
          }
        }
      }
    `
  );

  const posts = blogPostsQuery.allMarkdownRemark.edges.map(edge => {
    const { title, date } = edge.node.frontmatter;

    return (
      <li>
        <h2>{title}</h2>
        <p>{date}</p>
      </li>
    );
  });

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>{posts}</ol>
    </Layout>
  );
};

export default BlogPage;
