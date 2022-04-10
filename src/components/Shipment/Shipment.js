import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate = useNavigate();

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleAddress = (event) => {
    setAddress(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = {name, email, address, phone};
    console.log(shipping);
  };
  return (
    <div>
      <div className="form-container">
        <div>
          <h2 className="form-title">Shipping Information</h2>
          <form onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="name">Your Name</label>
              <input
                onBlur={handleName}
                type="text"
                name="name"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                value={user?.email}
                readOnly
                type="email"
                name="email"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="address">Address</label>
              <input
                onBlur={handleAddress}
                type="text"
                name="address"
                id=""
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="phone">Phone</label>
              <input
                onBlur={handlePhone}
                type="text"
                name="phone"
                id=""
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input
              className="form-submit"
              type="submit"
              value="Confirm Shipping"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Shipment;
