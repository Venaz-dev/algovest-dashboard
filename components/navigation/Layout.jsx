import React from "react";
import NavBar from "./NavBar";
import Head from "next/head";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>AlgoVest</title>
        <meta name="description" content="AlgoVest" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <main className="children">{children}</main>
    </div>
  );
};

export default Layout;
