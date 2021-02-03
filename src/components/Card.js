import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
`;

export const Row = styled.div`
 margin: 0 -5px;

 display: flex;
  flex-wrap: wrap;
 justify-content: center;
 text-align: center;

  :after {
  content: "";
  display: table;
  clear: both;
}
`;
export const Column = styled.div`
  float: left;
  width: 40%;
  padding: 10px 10px;

  /* Responsive columns */
@media screen and (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
}
`;

export const Card = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  border-radius: 4px;
  padding-bottom: 5rem;
  margin: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
  }
`;
