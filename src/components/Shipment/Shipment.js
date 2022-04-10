import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  //   const navigate=useNavigate()

  const handlerNameBlur = (event) => {
    setName(event.target.value);
  };

  const handlerAddressBlur = (event) => {
    setAddress(event.target.value);
  };

  const handlerPhoneNumber = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const Shipping = { name, email, address, phone };
    console.log(Shipping);
  };
  return (
    <div className="form-container">
      <div>
        <h2 className="form-title">Shipping Information</h2>

        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handlerNameBlur} type="text" name="name" required />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="email"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handlerAddressBlur}
              type="text"
              name="address"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              onBlur={handlerPhoneNumber}
              type="text"
              name="phone"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <p style={{ color: "red" }}>{}</p>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
