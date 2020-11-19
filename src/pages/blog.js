import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import styles from "./blog.module.scss";

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

    const { post } = styles;
    return (
      <li key={index} className={post}>
        <Link to={`/blog/${edge.node.fields.slug}`}>
          <h2>{title}</h2>
          <p>{date}</p>
        </Link>
      </li>
    );
  });

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={styles.posts}>{posts}</ol>
    </Layout>
  );
};

export default BlogPage;
