import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import "./model.css";

const Model = ({
  name,
  address,
  pincode,
  phoneNumber,
  setName,
  setAddress,
  setPincode,
  setPhoneNumber,
  buyNow,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="modal-button-container">
        <button type="button" onClick={openModal} className="buy-now-button">
          Buy Now
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="modal-dialog-container"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="modal-opacity-0"
            enterTo="modal-opacity-100"
            leave="ease-in duration-200"
            leaveFrom="modal-opacity-100"
            leaveTo="modal-opacity-0"
          >
            <div className="modal-overlay" />
          </Transition.Child>

          <div className="modal-wrapper">
            <div className="modal-aligner">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="modal-scale-0"
                enterTo="modal-scale-100"
                leave="ease-in duration-200"
                leaveFrom="modal-scale-100"
                leaveTo="modal-scale-0"
              >
                <Dialog.Panel className="modal-panel">
                  <section className="modal-content">
                    <div className="form-wrapper">
                      <div className="form-box">
                        <form className="form-fields">
                          <div className="form-group">
                            <label htmlFor="name">Enter Full Name</label>
                            <input
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              id="name"
                              name="name"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="address">Enter Full Address</label>
                            <input
                              type="text"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                              id="address"
                              name="address"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="pincode">Enter Pincode</label>
                            <input
                              type="text"
                              value={pincode}
                              onChange={(e) => setPincode(e.target.value)}
                              id="pincode"
                              name="pincode"
                              required
                            />
                          </div>

                          <div className="form-group">
                            <label htmlFor="mobileNumber">
                              Enter Mobile Number
                            </label>
                            <input
                              type="text"
                              value={phoneNumber}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              id="mobileNumber"
                              name="mobileNumber"
                              required
                            />
                          </div>
                        </form>

                        <button
                          type="button"
                          onClick={() => {
                            closeModal();
                            buyNow();
                          }}
                          className="submit-button"
                        >
                          Order Now
                        </button>
                      </div>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Model;
