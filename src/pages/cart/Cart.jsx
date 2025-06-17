import React, { useEffect, useState } from "react";
import "./cart.css";
import Layout from "../../components/layout/Layout";
import Model from "../../components/model/Model";
import { useDispatch, useSelector } from "react-redux";
import { deletefromcart } from "../../redux/Cartslice";
import { toast } from "react-toastify";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const Cart = () => {
  const cartitem = useSelector((state) => state.cart);
  console.log(cartitem);

  const dispatch = useDispatch();

  const deletecart = (item) => {
    // console.log(item);
    dispatch(deletefromcart(item));
    toast.success("Delete Cart");
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartitem));
  }, [cartitem]);

  //total amount state
  const [totalamount, settotalamount] = useState(0);

  useEffect(() => {
    let temp = 0;
    cartitem.forEach((element) => {
      temp += parseFloat(element.price);
    });
    settotalamount(temp);
  }, [cartitem]);

  const shippingcharge = 40 * cartitem.length;
  const grandtotal = parseFloat((shippingcharge + totalamount).toFixed(2));

  // ******* order now functionality ********************
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    // validation
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
    toast.success("Order Successfully");
    //address info
    const addressInfo = {
      name,
      address,
      pincode,
      phoneNumber,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    };

    //payment ******
    const paymentId = "pay_312415478152";
    // store in firebase
    const orderInfo = {
      cartitem,
      addressInfo,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
      email: JSON.parse(localStorage.getItem("user")).user.email,
      userid: JSON.parse(localStorage.getItem("user")).user.uid,
      paymentId,
    };

    try {
      const result = addDoc(collection(fireDB, "orders"), orderInfo);
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <>
      <Layout>
        <div className="cart-container">
          <h1 className="cart-title">Cart Items</h1>
          <div className="cart-content">
            {/* Left: Cart Items */}
            {cartitem.map((item, index) => {
              return (
                <div key={index} className="cart-items">
                  <div className="cart-item">
                    <img
                      src={item.imageUrl}
                      alt="product"
                      className="item-image"
                    />
                    <div className="item-details">
                      <div>
                        <h2 className="item-title">{item.title}</h2>
                        <p className="item-desc">{item.description}</p>
                        <p className="item-price">{item.price}</p>
                      </div>
                      <div className="item-actions">
                        <button
                          onClick={() => deletecart(item)}
                          className="remove-button"
                          title="Remove"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Right: Summary */}
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal</span>
                <span>{totalamount}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>{shippingcharge}</span>
              </div>
              <hr />
              <div className="summary-total">
                <span>Total</span>
                <span>{grandtotal}</span>
              </div>
              <Model
                name={name}
                address={address}
                pincode={pincode}
                phoneNumber={phoneNumber}
                setName={setName}
                setAddress={setAddress}
                setPincode={setPincode}
                setPhoneNumber={setPhoneNumber}
                buyNow={buyNow}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Cart;

// const [name, setName] = useState("")
//   const [address, setAddress] = useState("");
//   const [pincode, setPincode] = useState("")
//   const [phoneNumber, setPhoneNumber] = useState("")

//   const buyNow = async () => {
//     // validation
//     if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
//       return toast.error("All fields are required", {
//         position: "top-center",
//         autoClose: 1000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "colored",
//       })
//     }
//     const addressInfo = {
//       name,
//       address,
//       pincode,
//       phoneNumber,
//       date: new Date().toLocaleString(
//         "en-US",
//         {
//           month: "short",
//           day: "2-digit",
//           year: "numeric",
//         }
//       )
//     }
//     console.log(addressInfo)

//     var options = {
//       key: "",
//       key_secret: "",
//       amount: parseInt(grandTotal * 100),
//       currency: "INR",
//       order_receipt: 'order_rcptid_' + name,
//       name: "E-Bharat",
//       description: "for testing purpose",
//       handler: function (response) {

//         // console.log(response)
//         toast.success('Payment Successful')

//         const paymentId = response.razorpay_payment_id
//         // store in firebase
//         const orderInfo = {
//           cartItems,
//           addressInfo,
//           date: new Date().toLocaleString(
//             "en-US",
//             {
//               month: "short",
//               day: "2-digit",
//               year: "numeric",
//             }
//           ),
//           email: JSON.parse(localStorage.getItem("user")).user.email,
//           userid: JSON.parse(localStorage.getItem("user")).user.uid,
//           paymentId
//         }

//         try {
//           const result = addDoc(collection(fireDB, "orders"), orderInfo)
//         } catch (error) {
//           console.log(error)
//         }
//       },

//       theme: {
//         color: "#3399cc"
//       }
//     };
//     var pay = new window.Razorpay(options);
//     pay.open();
//     console.log(pay)
//   }
