import React, { useContext } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FaUser, FaCartPlus } from "react-icons/fa";
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from "react-icons/ai";
import "./dashboardtab.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import MyState from "../../../context/data/mystate";
import Mycontext from "../../../context/data/Mycontext";
import { Link } from "react-router";

const Dashboardtab = () => {
  const context = useContext(Mycontext);
  const { product, edithandle, deleteproduct, order, userdata } = context;
  console.log(product);

  const add = () => {
    window.location.href = "/addproduct";
  };
  return (
    <>
      <div className="dashboard-container">
        <Tabs>
          <TabList className="tab-list">
            <Tab>
              <button className="tab-btn">
                <MdOutlineProductionQuantityLimits /> Products
              </button>
            </Tab>
            <Tab>
              <button className="tab-btn">
                <AiFillShopping /> Orders
              </button>
            </Tab>
            <Tab>
              <button className="tab-btn">
                <FaUser /> Users
              </button>
            </Tab>
          </TabList>

          <TabPanel>
            <div className="section">
              <h1 className="section-title">Product Details</h1>
              <div className="button-container">
                <button className="add-btn" onClick={add}>
                  <FaCartPlus /> Add Product
                </button>
              </div>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  {product.map((item, index) => {
                    const {
                      title,
                      price,
                      imageUrl,
                      category,
                      description,
                      date,
                    } = item;
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>
                            <img
                              src={imageUrl}
                              alt="img"
                              className="table-img"
                            />
                          </td>
                          <td>{title}</td>
                          <td>{price}</td>
                          <td>{category}</td>
                          <td>{date}</td>
                          <td>
                            <RiDeleteBin6Line
                              onClick={() => deleteproduct(item)}
                            />{" "}
                            <Link to={"/updateproduct"}>
                              <FaRegEdit onClick={() => edithandle(item)} />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="section">
              <h1 className="section-title">Order Details</h1>
              <div className="table-wrapper">
                {order.map((allorder, index) => {
                  return (
                    <table>
                      <thead>
                        <tr>
                          <th>Payment ID</th>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Price</th>
                          <th>Category</th>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Pincode</th>
                          <th>Phone</th>
                          <th>Email</th>
                          <th>Date</th>
                        </tr>
                      </thead>
                      {allorder.cartitem.map((item, index) => {
                        return (
                          <tbody key={index}>
                            <tr>
                              <td>{allorder.paymentId}</td>
                              <td>
                                <img
                                  src={item.imageUrl}
                                  alt="img"
                                  className="table-img"
                                />
                              </td>
                              <td>{item.title}</td>
                              <td>{item.price}</td>
                              <td>{item.category}</td>
                              <td>{allorder.addressInfo.name}</td>
                              <td>{allorder.addressInfo.address}</td>
                              <td>{allorder.addressInfo.pincode}</td>
                              <td>{allorder.addressInfo.phoneNumber}</td>
                              <td>{allorder.email}</td>
                              <td>{allorder.date}</td>
                            </tr>
                          </tbody>
                        );
                      })}
                    </table>
                  );
                })}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="section">
              <h1 className="section-title">User Details</h1>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>S.No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>UID</th>
                    </tr>
                  </thead>
                  {userdata.map((item, index) => {
                    return (
                      <tbody key={index}>
                        <tr>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>

                          <td>{item.email}</td>
                          <td>{item.uid}</td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Dashboardtab;
