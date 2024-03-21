import styled from "styled-components";
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../utilities/Context";
import firstImage from "../../assets/Woman1.jpg";
import secondImage from "../../assets/apropos1.jpg";
import thirdImage from "../../assets/Man2.jpg";
import left from "../../assets/left.png";
import right from "../../assets/right.png";
import close from "../../assets/close.png";

import Album from "../../utilities/Database";
const Main = styled.div`
  background-color: #000000cd;
  ${(props) => (props.clicked === true ? `display:grid` : `display:none`)};
  grid-template-columns: 32.5% auto 32.5%;
  position: fixed;
  z-index: 5;
`;
const Container = styled.div`
  width: 100%;
  margin: auto;
  padding-top: 0px;
  overflow: hidden;
`;
const Picture = styled.img`
  width: 100%;
  height: 100%;
  margin: auto;
`;
const Item = styled.div`
  width: auto;
  z-index: 1;
  display: flex;
  transition: transform ease-in-out 0.3s;
  opacity: 1;
  transform: ${(props) =>
    props.move === true ? `translateX(-${100 * props.track}%);` : `0`};
`;

const DirectionArrows = styled.div`
  margin: auto;
  margin-top: 500px;
  width: 30px;
  height: 30px;
  &:hover {
    width: 30px;
    height: 30px;
    background-color: #706e6e;
  }
`;
const Close = styled.div`
  width: 30px;
  position: absolute;
  right: 480px;
  top: 55px;
  z-index: 5;
`;
function Caroussel() {
  const { clicked, setClicked, album, tracker, setTracker } =
    useContext(ThemeContext);
  const [moved, setMoved] = useState(false);
  const handleClick = (direction) => {
    setTracker(0);
    if (direction === "left" && tracker >= 1) {
      setTracker(tracker - 1);
      setMoved(true);
    } else if (
      direction === "right" &&
      tracker <= Album[album].images.length - 2
    ) {
      console.log(Item.width);
      setTracker(tracker + 1);
      setMoved(true);
    }
  };
  function handleClose() {
    setClicked(!clicked);
  }

  return (
    <Main clicked={clicked}>
      <DirectionArrows onClick={() => handleClick("left")}>
        <Picture alt="left arrow" src={left} />
      </DirectionArrows>
      <Container>
        <Close onClick={handleClose}>
          <Picture src={close} />
        </Close>
        <Item move={moved} track={tracker}>
          {Album[album].images.map((element) => (
            <Picture alt="firtImage" src={element} />
          ))}
        </Item>
      </Container>
      <DirectionArrows onClick={() => handleClick("right")}>
        <Picture alt="right arrow" src={right} />
      </DirectionArrows>
    </Main>
  );
}
export default Caroussel;
