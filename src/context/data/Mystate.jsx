import React, { useEffect, useState } from "react";
import Mycontext from "./Mycontext";
import {
  QuerySnapshot,
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import { toast } from "react-toastify";

function MyState(props) {
  const [loading, setloading] = useState(false);
  const [products, setproducts] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    description: "",
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // ********************** Add Product Section  **********************
  const addproduct = async (e) => {
    e.preventDefault();
    if (
      products.title == "" ||
      products.price == "" ||
      products.imageUrl == "" ||
      products.category == "" ||
      products.description == ""
    ) {
      return toast.error("Please fill all fields");
    }
    setloading(true);
    try {
      const productref = collection(fireDB, "products");
      await addDoc(productref, products);
      toast.success("Add Product Successfully ");
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 800);
      getproductdata();
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product");
      setloading(false);
    }
  };

  const [product, setproduct] = useState([]);

  // ****** get product ************
  const getproductdata = async () => {
    setloading(true);
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productarray = [];
        QuerySnapshot.forEach((element) => {
          productarray.push({ ...element.data(), id: element.id });
        });
        setproduct(productarray);
        setloading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getproductdata();
  }, []);

  // ************* Update Product Functionality ***************

  const edithandle = (item) => {
    setproducts(item);
  };

  const updateproduct = async (item) => {
    setloading(true);

    try {
      const productRef = doc(fireDB, "products", products.id); // reference to the document
      await setDoc(productRef, products); // update only specified fields
      toast.success("Product Updated Successfully");
      getproductdata();
      window.location.href = "/dashboard";
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
      setloading(false);
    }
    setproducts("");
  };

  // ************* Delete Product Functionality ***************
  const deleteproduct = async (item) => {
    setloading(true);
    try {
      const productRef = doc(fireDB, "products", item.id); // Reference to document
      await deleteDoc(productRef); // Delete document
      toast.success("Product Deleted successfully");
      setloading(false);
      getproductdata();
    } catch (error) {
      toast.error("Product Deleted Falied");
      console.log(error);
      setloading(false);
    }
  };
  // ************* get order data Functionality ***************
  const [order, setorder] = useState([]);

  const getorderdata = async () => {
    setloading(true);
    try {
      const result = await getDocs(collection(fireDB, "orders"));
      console.log(result);

      const orderarray = [];
      result.forEach((doc) => {
        orderarray.push(doc.data());
        console.log(doc.data());
      });
      setorder(orderarray);
      console.log(orderarray);
      setloading(false);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load orders");
      setloading(false);
    }
  };

  // ************* get user data Functionality ***************

  const [userdata, setUserdata] = useState([]);

  const getUserData = async () => {
    setloading(true);
    try {
      const result = await getDocs(collection(fireDB, "users"));
      const usersArray = [];
      result.forEach((doc) => {
        usersArray.push(doc.data());
        setloading(false);
      });
      setUserdata(usersArray);
      console.log(usersArray);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  };

  useEffect(() => {
    getorderdata();
    getUserData();
  }, []);

  //for filter functionality
  const [searchkey, setSearchkey] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterPrice, setFilterPrice] = useState("");

  return (
    <Mycontext.Provider
      value={{
        loading,
        setloading,
        product,
        products,
        setproducts,
        addproduct,
        edithandle,
        updateproduct,
        deleteproduct,
        order,
        userdata,
        searchkey,
        setSearchkey,
        filterType,
        setFilterType,
        filterPrice,
        setFilterPrice,
      }}
    >
      {props.children}
    </Mycontext.Provider>
  );
}

export default MyState;
