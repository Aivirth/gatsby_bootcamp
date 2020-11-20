import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/reset.scss";
import "../styles/index.scss";

import layoutStyles from "./layout.module.scss";

const Layout = props => {
  const { children } = props;
  const { container, content } = layoutStyles;

  return (
    <div className={container}>
      <div className={content}>
        <Header />
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
