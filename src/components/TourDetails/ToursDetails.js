import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 90%;
  height: 80vh;
  background-color: white;
  margin: 40px auto;
  padding: 2rem;
  box-shadow: 2px 2px 2px 2px #888888;
  border-radius: 1rem;
  display: flex;

  & img {
    width: 30%;
    height: 70vh;
    border-radius: 1rem;
  }

  & .data {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 17.5% 70% 12.5%;
    text-align: center;
    width: 60%;
    margin-left: 7.5%;
  }

  & .data p ${(props) => (!props.showFullText ? "desc" : "")} {
    grid-area: 2 / 1 / 2 / 3;
    display: -webkit-box;
    height: 80px;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.625;
    margin-top: 20%;
    margin-left: 5%;
  }

  & .data p {
    grid-area: 2 / 1 / 2 / 3;
    margin-top: 10%;
  }

  & .data button {
    grid-area: 3 / 1 / 3 / 3;
    width: 30%;
    height: 70%;
    margin: 0 auto;
  }
`;

const TourDetails = (props) => {
  let { id } = useParams();
  let loadedDestination = props.data.filter((ele) => ele.id === id);
  const [fullText, setfullText] = useState(true);
  const fullTextHandler = () => {
    setfullText(!fullText);
  };
  return (
    <Card showFullText={fullText}>
      <img
        src={loadedDestination[0].image}
        alt={`destination ${loadedDestination[0].name} preview`}
      />
      <div className="data">
        <h1 className="name">{loadedDestination[0].name}</h1>
        <h1 className="price">{`${loadedDestination[0].price}$`}</h1>
        <p>{loadedDestination[0].info}</p>
        <button onClick={fullTextHandler}> See full text</button>
      </div>
    </Card>
  );
};

export default TourDetails;