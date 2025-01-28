/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import toast from "react-hot-toast";


const Footer = () => {

  const [email, setEmail] = useState("")

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
   
    if (!email) {
      toast.error("Email is required!");
    } else if (!validateEmail(email)) {
      toast.error("Please enter a valid email address!"); 
    } else {
      toast.success("Subscribed to Newsletter successfully!");
      setEmail("") 
    }
  };

  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>EventNest</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="email" placeholder="E-mail" className="footer__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
             />
            <button className="footer__btn" onClick={handleSubscribe}>Subscribe</button>
          </div>
          <p>Sign up with your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;