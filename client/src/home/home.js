import React, { useState } from "react";
import Navbar from "./navbar";
import Portfolio from "./portfolio";

export default function Home() {
  const [setBlogRendered, blogRendered] = useState(false);
  return (
    <>
      <Navbar />
      <Portfolio blogRendered={blogRendered} />
    </>
  );
}
