import React, { useState, useEffect } from "react";
import * as moment from "moment";
import "./form.css";

const UserInputs = ({ setCardData }) => {
  const [cardDetails, setcardDetails] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
    logo: "",
  });

  const [errorLog, setErrorLog] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  //values gotten after render to be sent over to be displayed on card are here
  useEffect(() => {
    setCardData({ ...cardDetails });
  }, [cardDetails]);

  //make sure only numbers are entered and no spaces
  const validateNumericFields = (name, val) => {
    if ((!Number(val) && val !== "" && val !== "0") || /\s/g.test(val)) {
      setErrorLog({
        ...errorLog,
        [name]: "Only numeric input is allowed in this field",
      });
      return false;
    } else {
      return true;
    }
  };

  //make sure name doesnt contain special characters or spaces
  const validateNameFields = (name, val) => {
    if (
      /[!@#$%^&*(),.?":{}|<>]/g.test(val) ||
      /\d+/g.test(val) ||
      /\s/g.test(val)
    ) {
      setErrorLog({
        ...errorLog,
        [name]: "Only letters allowed in Name Field.",
      });
      return false;
    } else {
      return true;
    }
  };

  const validateDate = (name, val) => {
    //receving date as YYYY-MM
    let currentDate = new Date();
    currentDate = moment(currentDate).format("YYYY-MM");
    let dateArr = currentDate.split("-");
    let givenDate = val.split("-");

    if (givenDate[0] < dateArr[0]) {
      //given year is less than current year
      setErrorLog({
        ...errorLog,
        [name]: "Expiration year can't be in the past.",
      });
      return;
    } else if (
      //year is the same
      givenDate[0] === dateArr[0] &&
      //month is less than current month or equal to current month
      (givenDate[1] < dateArr[1] || givenDate[1] === dateArr[1])
    ) {
      setErrorLog({
        ...errorLog,
        [name]: "Expiration month invalid.",
      });
      return;
    }
    //date is valid
    //clear error
    setErrorLog({
      ...errorLog,
      [name]: "",
    });
    //update virtual card
    setcardDetails({
      ...cardDetails,
      expirationMonth: givenDate[1],
      expirationYear: givenDate[0].slice(-2),
    });
    return false;
  };

  //when change is made to input field send data to use state and set value from usestate
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (
      name === "firstName" &&
      !validateNameFields(name, value) &&
      value !== ""
    ) {
      return;
    }
    if (
      name === "lastName" &&
      !validateNameFields(name, value) &&
      value !== ""
    ) {
      return;
    }
    if (name === "cardNumber" && !validateNumericFields(name, value)) {
      return;
    }

    if (name === "expirationDate" && !validateDate(name, value)) {
      return;
    }

    if (name === "cvv" && !validateNumericFields(name, value)) {
      return;
    }
    //clear errors
    setErrorLog({
      ...errorLog,
      [name]: "",
    });
    //update virtual card
    setcardDetails({ ...cardDetails, [name]: value });
  };
  return (
    <>
      <article className="form-container">
        <form className="form-control">
          <div className="wrapper">
            <div className="labelInputContainer">
              <label htmlFor="firstName">First Name: </label>
              <input
                id="firstName"
                className="text-input"
                name="firstName"
                type="text"
                maxLength="10"
                value={cardDetails.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="errorShow">
              <p dangerouslySetInnerHTML={{ __html: errorLog.firstName }}></p>
            </div>
            <div className="labelInputContainer">
              <label htmlFor="lastName">Last Name: </label>
              <input
                name="lastName"
                id="lastName"
                className="text-input"
                type="text"
                maxLength="10"
                value={cardDetails.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="errorShow">
              <p dangerouslySetInnerHTML={{ __html: errorLog.lastName }}></p>
            </div>
            <div className="labelInputContainer">
              <label htmlFor="cardNumber">Card Number: </label>
              <input
                name="cardNumber"
                id="cardNumber"
                className="text-input"
                type="text"
                maxLength="16"
                value={cardDetails.cardNumber}
                onChange={handleChange}
              />
            </div>
            <div className="errorShow">
              <p dangerouslySetInnerHTML={{ __html: errorLog.cardNumber }}></p>
            </div>
            <div className="labelInputContainer">
              <label htmlFor="expirationDate">Expiration Date: </label>
              <input
                name="expirationDate"
                id="expirationDate"
                type="month"
                className="text-input"
                maxLength="7"
                placeholder="MM/YYYY"
                onKeyDown={(e) => e.preventDefault()}
                value={cardDetails.expirationDate}
                onChange={handleChange}
              />
            </div>
            <div className="errorShow">
              <p
                dangerouslySetInnerHTML={{ __html: errorLog.expirationDate }}
              ></p>
            </div>
            <div className="labelInputContainer">
              <label htmlFor="cvv">cvv: </label>
              <input
                name="cvv"
                id="cvv"
                type="text"
                className="text-input"
                maxLength="3"
                value={cardDetails.cvv}
                onChange={handleChange}
              />
            </div>
            <div className="errorShow">
              <p dangerouslySetInnerHTML={{ __html: errorLog.cvv }}></p>
            </div>
          </div>
        </form>
      </article>
    </>
  );
};
export default UserInputs;
