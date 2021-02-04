import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card } from './Card';
import styled from 'styled-components';
import { Button } from './Button';

const CardPaymentStyled = styled(Card)`
  line-height: 4rem;
  text-align: center;
`;

const CloseBtn = styled.div`
float: right;
padding: 5px;
color: #777;
font: 14px/100% arial,sans-serif;
-webkit-text-decoration: none;
text-decoration: none;
text-shadow: 0 1px 0 #fff;
cursor: pointer;
`;

export default connect((state) => state)(function CardPayment(props) {
  const [selectedAmount, setSelectedAmount] = useState(10);
  const paymentOptions = [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={j}>
      <input
        type='radio'
        name='payment'
        onChange={(e) => setSelectedAmount(amount)}
      />
      {amount}
    </label>
  ));
  const handlePay = ({ id, currency }, amount) => {
    const paymentData = `{ 'charitiesId': ${id}, 'amount': ${amount}, 'currency': '${currency}' }`
    // console.log(paymentData)
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: paymentData,
      headers: { 'Content-Type': 'application/json' },
    })
      .then(function (resp) {
        return resp.json();
      })
      .then(function () {
        props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        });
        props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        });

        setTimeout(function () {
          props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
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
      <Button
        onClick={(e) => {
          e.preventDefault()
          handlePay(props.paymentDetails, selectedAmount)
        }}
      >Pay</Button>
    </CardPaymentStyled>
  );
});
