import React from "react";
import "../../../../index.css";

const PaymentMethodSelector = () => {
  return (
    <form className="payment-form">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label className="payment-label" htmlFor="naqd">
          Naqd pul
          <input type="radio" id="naqd" name="payment" value="naqd" />
        </label>

        <label className="payment-label" htmlFor="plastik">
          Plastik karta
          <input type="radio" id="plastik" name="payment" value="plastik" />
        </label>

        <label className="payment-label" htmlFor="click">
          Click
          <input type="radio" id="click" name="payment" value="click" />
        </label>
      </div>
      <div style={{ display: "flex", flex: "1", flexDirection: "column" }}>
        <label className="payment-label" htmlFor="bank">
          Bank hisobi
          <input type="radio" id="bank" name="payment" value="bank" />
        </label>

        <label className="payment-label" htmlFor="payme">
          Payme
          <input type="radio" id="payme" name="payment" value="payme" />
        </label>

        <label className="payment-label" htmlFor="uzum">
          Uzum
          <input type="radio" id="uzum" name="payment" value="uzum" />
        </label>
      </div>
    </form>
  );
};

export default PaymentMethodSelector;
