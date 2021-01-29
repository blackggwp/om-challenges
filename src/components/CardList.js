import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
flex-wrap: wrap;
justify-content: center;
text-align: center;
`;

const Card = styled.div`
display: inline-block;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  height: 250px;
  border-radius: 4px;
  padding-bottom: 5rem;
  margin: 1rem;
  -webkit-box-shadow: 0px 4px 16px -5px #000000; 
box-shadow: 0px 4px 16px -5px #000000;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const CardPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 1px solid true;
  padding-bottom: 40px;

`
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
-webkit-transition: all 0.25s cubic-bezier(0.02,0.01,0.47,1);
transition: all 0.25s cubic-bezier(0.02,0.01,0.47,1);

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
    transform: translate(0, -5px);
  }
`;

export default function CardList(props) {

  const cards = props.charities.map(function (item, i) {
    return (
      <Card key={i} >
        <CardPhoto
          src={process.env.PUBLIC_URL + '/images/' + item.image}
        >
        </CardPhoto>
        <CardBody>
          <CardName>
            {item.name}
          </CardName>
          <CardButton type="button">Donate</CardButton>
        </CardBody>
      </Card>
    )
  })
  return cards
}
