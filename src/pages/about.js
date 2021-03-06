import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head pageTitle="About" />
      <h1>About us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum officia
        tenetur distinctio incidunt numquam fugiat earum vero nesciunt laborum
        provident quis rerum dolore amet, consequuntur id repellat velit,
        dolorem est.
      </p>
      <p>
        <Link to="/contact">Contact us</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
