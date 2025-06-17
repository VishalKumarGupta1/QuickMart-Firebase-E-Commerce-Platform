import React, { useContext } from "react";
import "./addproduct.css";
import Mycontext from "../../../context/data/Mycontext";

const Addproduct = () => {
  const context = useContext(Mycontext);
  const { products, setproducts, addproduct } = context;

  return (
    <>
      <div className="add-product-wrapper">
        <div className="add-product-container">
          <h1 className="form-title">Add Product</h1>
          <form>
            <input
              onChange={(e) =>
                setproducts({ ...products, title: e.target.value })
              }
              value={products.title}
              type="text"
              name="title"
              placeholder="Product title"
            />
            <input
              onChange={(e) =>
                setproducts({ ...products, price: e.target.value })
              }
              value={products.price}
              type="text"
              name="price"
              placeholder="Product price"
            />
            <input
              type="text"
              onChange={(e) =>
                setproducts({ ...products, imageUrl: e.target.value })
              }
              value={products.imageUrl}
              name="imageurl"
              placeholder="Product image URL"
            />
            <input
              type="text"
              onChange={(e) =>
                setproducts({ ...products, category: e.target.value })
              }
              value={products.category}
              name="category"
              placeholder="Product category"
            />
            <textarea
              name="description"
              onChange={(e) =>
                setproducts({ ...products, description: e.target.value })
              }
              value={products.description}
              placeholder="Product description"
              rows="5"
            ></textarea>
            <button onClick={addproduct} type="submit">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Addproduct;
