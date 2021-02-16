import "./App.css";
import UserForm from "./Form";
import CreditCard from "./Creditcard";
import React, { useState } from "react";
import Header from "./Header";

function App() {
  const [cardData, setCardData] = useState({});
  return (
    <div className="App">
      <div className="headerContainer">
        <Header />
      </div>
      <div className="bodyContent">
        <CreditCard cardData={cardData} />
        <UserForm setCardData={setCardData} />
      </div>
    </div>
  );
}

export default App;
