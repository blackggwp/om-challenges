import React, { useState } from "react";
import { connect } from "react-redux";
import { Card } from './Card';
import styled from "styled-components";

const CardPaymentStyled = styled(Card)`
  line-height: 4rem;
  text-align: center;
`;

const CloseBtn = styled.div`
position: relative;
color: #777;
font: 14px/100% arial,sans-serif;
right: -170px;
-webkit-text-decoration: none;
text-decoration: none;
text-shadow: 0 1px 0 #fff;
top: 5px;
cursor: pointer;
`;

export default connect((state) => state)(function CardPayment(props) {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const paymentOptions = [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={j}>
      <input
        type="radio"
        name="payment"
        onChange={(e) => setSelectedAmount(amount)}
      />
      {amount}
    </label>
  ));
  const handlePay = (id, amount, currency) => {
    fetch("http://localhost:3001/payments", {
      method: "POST",
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function () {
        props.dispatch({
          type: "UPDATE_TOTAL_DONATE",
          amount,
        });
        props.dispatch({
          type: "UPDATE_MESSAGE",
          message: `Thanks for donate ${amount}!`,
        });

        setTimeout(function () {
          props.dispatch({
            type: "UPDATE_MESSAGE",
            message: "",
          });
        }, 2000);
      });
  };
  return (
    <CardPaymentStyled
      onMouseEnter={() => props.setIsShown(false)}
      onMouseLeave={() => props.setIsShown(true)}
    >
      <CloseBtn
        onClick={() => props.setIsShown(true)}
      >x</CloseBtn>
      <p>Select the amount to donate (USD)</p>
      {paymentOptions}
      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          handlePay();
        }}
      >
        Pay
      </button>
    </CardPaymentStyled>
  );
});
