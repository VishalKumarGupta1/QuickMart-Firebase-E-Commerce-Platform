import "./productinfo.css";
import Layout from "../../components/layout/Layout";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { addtocart } from "../../redux/Cartslice";
import { fireDB } from "../../firebase/FirebaseConfig";
import Mycontext from "../../context/data/Mycontext";

const Productinfo = () => {
  const context = useContext(Mycontext);
  const { setloading } = context;

  const [products, setProducts] = useState("");
  const params = useParams();
  // console.log(products.title)

  const getProductData = async () => {
    setloading(true);
    try {
      const productTemp = await getDoc(doc(fireDB, "products", params.id));
      // console.log(productTemp)
      setProducts(productTemp.data());
      console.log(productTemp.data());
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart);

  // add to cart
  const addCart = (products) => {
    dispatch(addtocart(products));
    toast.success("add to cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartitem));
  }, [cartitem]);

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <>
      <Layout>
        <section className="product-section">
          <div className="product-container">
            <div className="product-wrapper">
              <img
                alt="ecommerce"
                className="product-image"
                src={products.imageUrl}
              />
              <div className="product-details">
                <h2 className="product-brand">BRAND NAME</h2>
                <h1 className="product-title">{products.title}</h1>
                <div className="product-rating">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="star filled">
                      &#9733;
                    </span>
                  ))}
                  <span className="star">&#9734;</span>
                  <span className="review-text">4 Reviews</span>
                </div>
                <p className="product-description">{products.description}</p>
                <div className="product-actions">
                  <span className="product-price">{products.price}</span>
                  <button
                    onClick={() => addCart(products)}
                    className="add-cart-btn"
                  >
                    Add To Cart
                  </button>
                  <button className="like-btn">&#10084;</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Productinfo;
