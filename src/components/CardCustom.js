import React, { useState } from "react";
import styled from "styled-components";
import CardPayment from "./CardPayment";
import { Card } from "./Card";

const CardPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid true;
  padding-bottom: 40px;
`;
const CardBody = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;

const CardName = styled.div`
  float: left;
`;

const CardButton = styled.button`
  float: right;
  width: 25%;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: blue;
  border-color: blue;
  box-shadow: 0 10px 10px rgb(0 0 0 / 8%);
  cursor: pointer;
  -webkit-transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);
  transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export default function CardCustom(props) {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      {isShown ?
        <Card
          id="div1"
          onMouseEnter={() => setIsShown(false)}
          onMouseLeave={() => setIsShown(true)}
        >
          <CardPhoto
            src={window.location.origin + '/images/' + props.charities.image}
          >
          </CardPhoto>
          <CardBody>
            <CardName>
              {props.charities.name}
            </CardName>
            <CardButton type="button">Donate</CardButton>
          </CardBody>
        </Card> :
        <CardPayment paymentDetails={props.charities} setIsShown={setIsShown} />
      }
    </>
  );
}
