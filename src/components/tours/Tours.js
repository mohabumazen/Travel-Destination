import Tour from "./tour/Tour";

import styled from "styled-components";

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5rem 0;
`;

const Tours = (props) => {
  let travelDestinations = props.data.map((ele) => <Tour data={ele}></Tour>);
  return <Ul>{travelDestinations}</Ul>;
};

export default Tours;