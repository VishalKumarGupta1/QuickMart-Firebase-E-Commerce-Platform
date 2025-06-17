import React from "react";
import Layout from "../../components/layout/Layout";
import Herosection from "../../components/herosection/Herosection";
import Filter from "../../components/filter/Filter";
import Productcard from "../../components/productcard/Productcard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
// import { useDispatch, useSelector } from "react-redux";
// import { addtocart, deletefromcart } from "../../redux/Cartslice";

const Home = () => {
  return (
    <>
      <Layout>
        <Herosection />
        <Filter />
        <Productcard />
        <Track />
        <Testimonial />
      </Layout>
    </>
  );
};

export default Home;
