import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Head from "../components/head";

export const currPostQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
      }
    }
  }
`;

const Blog = props => {
  const { title, publishedDate, body } = props.data.contentfulBlogPost;
  const bodyRaw = body.raw;
  const bodyJson = JSON.parse(bodyRaw);

  const options = {
    renderNode: {
      "embeded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"];
        const url = node.data.target.fields.file["en-US"].url;
        return <img alt={alt} url={url} />;
      },
    },
  };

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      <div>{documentToReactComponents(bodyJson, options)}</div>
    </Layout>
  );
};

export default Blog;
