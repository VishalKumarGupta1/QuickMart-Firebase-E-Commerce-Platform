import React, { useContext, useEffect } from "react";
import "./productcard.css";
import Mycontext from "../../context/data/Mycontext";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addtocart } from "../../redux/Cartslice";

const Productcard = () => {
  const context = useContext(Mycontext);
  const { product, searchkey, filterType, filterPrice } = context;

  const dispatch = useDispatch();
  const cartitem = useSelector((state) => state.cart);
  console.log(cartitem);

  const addcart = (item) => {
    dispatch(addtocart(item));
    toast.success("Add to Cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartitem));
  }, [cartitem]);

  return (
    <div>
      <section className="product-section">
        <div className="product-container">
          <div className="section-header">
            <h1 className="section-title">Our Latest Collection</h1>
            <div className="section-divider"></div>
          </div>

          <div className="product-grid">
            {product
              .filter((obj) => obj.title.toLowerCase().includes(searchkey))
              .filter((obj) => obj.category.toLowerCase().includes(filterType))
              .filter((obj) => obj.price.includes(filterPrice))
              .map((item, index) => (
                <div onClick={()=> window.location.href = `/productinfo/${item.id}`} className="product-card" key={index}>
                  <div className="product-image-wrapper1">
                    <img
                      className="product-image1"
                      src={item.imageUrl}
                      alt="product"
                    />
                  </div>
                  <div className="product-info">
                    <h2 className="product-brand">E-Bharat</h2>
                    <h1 className="product-title">{item.title}</h1>
                    <p className="product-price">{item.price}</p>
                    <div className="product-button-wrapper">
                      <button
                        onClick={() => addcart(item)}
                        type="button"
                        className="add-to-cart-button"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productcard;
