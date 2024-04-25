import React from "react";
import Header from "../components/Header/Header";
import RepairServices from "../components/RepairServices/RepairServices";
import Footer from "../components/Footer/Footer";
const Blog = () => {
  return (
    <div>
      <h1 className="text-8xl mt-16">Blog</h1>
      <Header />
      <RepairServices />
      <Footer />
    </div>
  );
};

export default Blog;
