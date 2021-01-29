import React from 'react';
import styled from 'styled-components';

export default function CardPayment() {
  const payments = [10, 20, 50, 100, 500].map((amount, j) => (
    <label key={j}>
      <input
        type="radio"
        name="payment"
        onClick={function () {
          self.setState({ selectedAmount: amount })
        }}
      /> {amount}
    </label>
  ));
  return (
    <div>
      {payments}
      <button>Pay</button>
    </div>

  )
}
