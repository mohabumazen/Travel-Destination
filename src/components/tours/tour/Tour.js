import styled from "styled-components";
import { Link } from "react-router-dom";

const Li = styled(Link)`
  list-style: none;
  width: 20rem;
  height: 20rem;
  background-color: #f2f4f8;
  border-radius: 5%;
  box-shadow: 2px 2px 2px 2px #888888;
  margin: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10000;
`;

const H1 = styled.h1`
  text-align: center;
  margin-top: 5%;
  margin-right: 4%;
  font-size: 2rem;
`;

const Img = styled.img`
  width: 20rem;
  height: 14rem;
  border-bottom-left-radius: 5%;
  border-bottom-right-radius: 5%;
`;

const Tour = (props) => {
  return (
    <Li to={`/${props.data.id}`} key={props.data.id}>
      <H1>{props.data.name}</H1>
      <Img src={props.data.image} alt={`A tour in ${props.data.name}`} />
    </Li>
  );
};

export default Tour;