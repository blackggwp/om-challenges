import React, { useState } from 'react';
import styled from 'styled-components';
import CardPayment from './CardPayment';
import { Card } from './Card';
import { Button } from './Button';

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
  font-size: 18px !important;
  line-height: 22px !important;
`;

const CardButton = styled(Button)`
  float: right;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export default function CardCustom(props) {
  const [isShown, setIsShown] = useState(true);

  return (
    <React.Fragment>
      {isShown ?
        <Card
          id='div1'
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
            <CardButton
              onClick={() => setIsShown(false)}
            >Donate</CardButton>
          </CardBody>
        </Card> :
        <CardPayment paymentDetails={props.charities} setIsShown={setIsShown} />
      }
    </React.Fragment>
  );
}
