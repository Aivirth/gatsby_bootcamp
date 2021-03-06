import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const IndexPage = () => {
  return (
    <Layout>
      <Head pageTitle="Home" />
      <h1>Hello</h1>
      <h2>Fullstack developer</h2>
      <p>
        Need a developer ? <Link to="/contact">click here</Link>
      </p>
    </Layout>
  );
};

export default IndexPage;
