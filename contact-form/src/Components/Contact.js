import React, { useState } from "react";
import "../app.css";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();

    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })

      .then(() => {
        alert("message has been submitted");
        setLoader(false);
      })
      .catch(error => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    //   running function as user submits the form
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact here 📞</h1>
      <label>Name</label>
      <input
        placeholder="Enter Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      ></input>

      <label>Email</label>
      <input
        required
        placeholder="Enter Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      ></input>

      <label>Message</label>
      <textarea
        placeholder="Enter message"
        value={message}
        onChange={e => setMessage(e.target.value)}
      ></textarea>

      <button type="submit" style={{ background: loader ? "#ccc" : "blue" }}>
        submit
      </button>
    </form>
  );
};

export default Contact;
