import styled from "styled-components";

export const Card = styled.div`
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
    opacity: 0.8;
  }
`;
