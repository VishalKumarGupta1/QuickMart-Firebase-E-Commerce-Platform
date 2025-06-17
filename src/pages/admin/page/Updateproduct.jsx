import React, { useContext } from "react";
import "./updateproduct.css";
import Mycontext from "../../../context/data/Mycontext";
import Loader from "../../../components/loader/Loader";

const Updateproduct = () => {
  const context = useContext(Mycontext);
  const { loading, products, setproducts, updateproduct } = context;

  const handlesumbit = (e) => {
    e.preventDefault();
    updateproduct(); // We update based on `products` state
  };

  return (
    <>
      {loading && <Loader />}
      <div className="update-product-wrapper">
        <div className="update-product-container">
          <h1 className="form-title">Update Product</h1>
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
            <button onClick={handlesumbit} type="submit">
              Update Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Updateproduct;
