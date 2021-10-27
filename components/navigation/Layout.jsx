import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>AlgoVest</title>
        <meta name="description" content="AlgoVest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="children">{children}</div>
    </div>
  );
};

export default Layout;
