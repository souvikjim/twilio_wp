import React from "react";
import { useState } from "react";
import regex from "../../Regex/regex";
import axios from "axios";
import Constants from "../Constants";
import classes from "./style.module.css";



const ContactPage=()=>{
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

    const [showMsg,setShowMsg]= useState('')
  
    const handleNumberChange = (e) => {
      setShowMsg('')
      const inputPhoneNumber = e.target.value;
      const numericValue = inputPhoneNumber.replace(/[^0-9]/g, '');

        setPhoneNumber(numericValue);
  
      setIsValidPhoneNumber(regex.phoneNumberRegex.test(inputPhoneNumber));
    };

    const handleSubmit = (e) => {
      e.preventDefault();

      if (isValidPhoneNumber) {
        console.log("Phone Number submitted:", phoneNumber);

        axios
          .post(Constants.base_url, { phoneNumber })
          .then((response) => {
            console.log(response.data);
            // setShowMsg(response.data)
            setPhoneNumber('')
          })
          .catch((error) => {
            console.error(error);
            setShowMsg(error)
          });
      }
    };
  
    return (
      <div>
        <h1>Contacts Page</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Phone Number:
            <input type="tel" value={phoneNumber} onChange={handleNumberChange} placeholder="Please insert your phone number"/>
          </label>
          {!isValidPhoneNumber && <p style={{ color: 'red' }}>Please enter a valid phone number.</p>}
          <button type="submit" disabled={!isValidPhoneNumber}>
            Submit
          </button>
          
        </form>

        <h3>{showMsg}</h3>
      </div>
    );
  };
  
export default ContactPage;