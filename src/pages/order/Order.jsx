import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";
import "./order.css"; // External CSS file
import Mycontext from "../../context/data/myContext";

const Order = () => {
  const userid = JSON.parse(localStorage.getItem("user")).user.uid;
  const context = useContext(Mycontext);
  const { loading, order } = context;

  return (
    <>
      <Layout>
        {loading && <Loader />}
        {order.length > 0 ? (
          <div className="order-container">
            {order
              .filter((obj) => obj.userid === userid)
              .map((orderItem, index) => (
                <div className="order-wrapper" key={index}>
                  {orderItem.cartitem.map((item, idx) => (
                    <div className="order-item" key={idx}>
                      <img
                        src={item.imageUrl}
                        alt="product"
                        className="product-image"
                      />
                      <div className="product-details">
                        <h2 className="product-title">{item.title}</h2>
                        <p className="product-description">
                          {item.description}
                        </p>
                        <p className="product-price">${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>
        ) : (
          <h2 className="no-order-text">No Order</h2>
        )}
      </Layout>
    </>
  );
};

export default Order;
