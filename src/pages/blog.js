import React from "react";
import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import styles from "./blog.module.scss";

const BlogPage = () => {
  const blogPostsQuery = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              publishedDate(formatString: "MMMM Do, YYYY")
            }
          }
        }
      }
    `
  );

  const posts = blogPostsQuery.allContentfulBlogPost.edges.map(
    (edge, index) => {
      const { title, slug, publishedDate } = edge.node;

      const { post } = styles;
      return (
        <li key={index} className={post}>
          <Link to={`/blog/${slug}`}>
            <h2>{title}</h2>
            <p>{publishedDate}</p>
          </Link>
        </li>
      );
    }
  );

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={styles.posts}>{posts}</ol>
    </Layout>
  );
};

export default BlogPage;
