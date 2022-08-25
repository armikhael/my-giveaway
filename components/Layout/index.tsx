import React from "react";
import Header from "@components/Header";
import Footer from "@components/Footer";

export interface model {
  children: React.ReactNode;
}

function Layout({ children }: model) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Layout;
