import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

import "./Navbar.css";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const handlelogout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  const cartitem = useSelector((state) => state.cart);

  return (
    <div className="navbar">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="mobile-menu-wrapper"
          onClose={setOpen}
          open={open}
        >
          <Transition.Child
            as={Fragment}
            enter="fade-in"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="fade-out"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="mobile-menu-overlay" />
          </Transition.Child>

          <div className="mobile-menu-container">
            <Transition.Child
              as={Fragment}
              enter="slide-in"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="slide-out"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="mobile-menu-panel">
                <div className="mobile-menu-header">
                  <button
                    type="button"
                    className="close-button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                  >
                    <RxCross2 size={24} />
                  </button>
                </div>

                <nav className="mobile-menu-nav">
                  <Link
                    to="/allproduct"
                    className="mobile-menu-link"
                    onClick={() => setOpen(false)}
                  >
                    All Products
                  </Link>
                  {user && (
                    <Link
                      to="/order"
                      className="mobile-menu-link"
                      onClick={() => setOpen(false)}
                    >
                      Order
                    </Link>
                  )}

                  {user?.user?.email === "vishal@gmail.com" && (
                    <Link
                      to="/dashboard"
                      className="mobile-menu-link"
                      onClick={() => setOpen(false)}
                    >
                      Admin
                    </Link>
                  )}

                  {user ? (
                    <a
                      onClick={handlelogout}
                      className="mobile-menu-link logout-link"
                    >
                      Logout
                    </a>
                  ) : (
                    <Link to="/login" className="mobile-menu-link">
                      Login
                    </Link>
                  )}
                  <Link
                    to="/"
                    className="profile-link"
                    onClick={() => setOpen(false)}
                    aria-label="Profile"
                  >
                    <img
                      className="profile-img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdLBPtVBiGPQ4LrKanWvkPFbQTTcnvGoOEg&s"
                      alt="Dan Abromov"
                    />
                  </Link>
                </nav>

                <div className="mobile-menu-footer">
                  <a
                    href="#"
                    className="currency-switcher"
                    aria-label="Change currency"
                  >
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt="India Flag"
                      className="flag-img"
                    />
                    <span>INDIA</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop and mobile navbar */}
      <header className="header">
        <div className="announcement-bar">
          Get free delivery on orders over ₹300
        </div>

        <nav className="nav-inner">
          {/* Hamburger menu - visible on mobile */}
          <button
            type="button"
            className="menu-button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="menu-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <h1 className="logo-text">E-Bharat</h1>
            </Link>
          </div>

          {/* Desktop nav links - hidden on mobile */}
          <div className="nav-links">
            <Link to="/allproducts" className="nav-link">
              All Products
            </Link>
            {user && (
              <Link to="/order" className="nav-link">
                Order
              </Link>
            )}

            {user?.user?.email === "vishal@gmail.com" && (
              <Link to="/dashboard" className="nav-link">
                Admin
              </Link>
            )}

            {user ? (
              <a
                href="#"
                onClick={handlelogout}
                className="nav-link logout-link"
              >
                Logout
              </a>
            ) : (
              <Link to="/login" className="mobile-menu-link">
                Login
              </Link>
            )}
          </div>

          {/* Right side icons (cart, flag, profile) */}
          <div className="right-side">
            <Link to="/cart" className="cart-link" aria-label="View cart">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="cart-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="cart-count">{cartitem.length}</span>
            </Link>

            <a href="#" className="flag-section" aria-label="Change currency">
              <img
                src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                alt="India flag"
                className="flag-img"
              />
              <span>INDIA</span>
            </a>

            <a  href="#" className="profile-section" aria-label="Profile">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjdLBPtVBiGPQ4LrKanWvkPFbQTTcnvGoOEg&s"
                alt="Dan Abromov"
                className="profile-img"
              />
              <div style={{ all: "unset" }} className="name">Dan Abromov</div>{" "}
              {/* No CSS applied */}
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
}
