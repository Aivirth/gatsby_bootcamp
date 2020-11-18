import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";

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
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  const posts = blogPostsQuery.allMarkdownRemark.edges.map((edge, index) => {
    const { title, date } = edge.node.frontmatter;

    return (
      <li key={index}>
        <h2>{title}</h2>
        <p>{date}</p>
        <p>
          <Link to={`/blog/${edge.node.fields.slug}`}>go to article</Link>
        </p>
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
