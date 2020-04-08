import React, { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Portfolio from "./portfolio";

export default function Home() {
  const [blogRendered, setBlogRendered] = useState(false);
  return (
    <>
      <Navbar blogRendered={blogRendered} />
      <Portfolio />
      <Footer />
    </>
  );
}
