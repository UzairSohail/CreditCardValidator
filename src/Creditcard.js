import cvv from "./images/cvv.png";
import paypalLogo from "./images/paypal.png";
import "./Creditcard.css";

function MakeCard({ cardData }) {
  return (
    <div className="card-container">
      <div className="checkout-form">
        <div className="card_number" id="card-container">
          <input
            type="text"
            className="input"
            placeholder="0000 0000 0000 0000"
            value={cardData.cardNumber}
            disabled
          />
        </div>
        <div className="card_grp">
          <div className="expiry_date">
            <input
              type="text"
              className="expiry_input , input"
              placeholder="00"
              value={cardData.expirationMonth}
              disabled
            />
            <input
              type="text"
              className="expiry_input , input"
              placeholder="00"
              value={cardData.expirationYear}
              disabled
            />
          </div>

          <div className="cvv">
            <input
              type="text"
              className="cvv_input , input"
              placeholder="000"
              value={cardData.cvv}
              disabled
            />
            <div className="cvv-img">
              ?
              <div className="img">
                <img src={cvv} alt="CVV" style={{}} />
              </div>
            </div>
          </div>
        </div>
        <div className="name">
          <input
            type="text"
            className="input , ownername"
            placeholder="John Doe"
            value={`${cardData.firstName} ${cardData.lastName}`}
            disabled
          />
        </div>
        <div className="logoContainer">
          <img
            id="cardlogo"
            className="logo"
            src={paypalLogo}
            alt="masterLogo"
          />
        </div>
      </div>
    </div>
  );
}

export default MakeCard;
