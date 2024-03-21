import styled from "styled-components";
import { ThemeContext } from "../../utilities/Context";
import ThemeProvider from "../../utilities/Context";
import { grayForParagraph, grayForTitle } from "../../utilities/Colors";
import cover1 from "../../assets/Woman1.jpg";
import cover2 from "../../assets/apropos2.jpg";
import cover3 from "../../assets/apropos3.jpg";
import cover4 from "../../assets/apropos4.jpg";
import cover5 from "../../assets/apropos5.jpg";
import Album from "../../utilities/Database";
import Caroussel from "../Caroussel";
import { useContext } from "react";

const Main = styled.div``;
const Container = styled.div`
  padding-top: 20px;
  width: 85%;
  margin: auto;

  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
`;
const Item = styled.div`
  overflow: hidden;
  margin-bottom: 10px;
  position: relative;
  height: 300px;
  z-index: 2;
  &:nth-child(3) {
    height: auto;
    grid-column: span 2;
    grid-row: span 3;
  }
`;
const Cover = styled.img`
  width: 100%;
  position: absolute;
  transition: transform ease-in-out 0.4s;
  ${Item}:hover & {
    transform: scale(1.2);
  }
`;
const Overlay = styled.div`
  background-color: #ffffffb6;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1;
  position: absolute;
  opacity: 0;

  &:hover {
    opacity: 1;
    transition: opacity ease-in 0.3s;
  }
`;
const AlbumTitle = styled.h1`
  color: ${grayForTitle};
  text-align: center;
  font-size: 30px;
  position: absolute;
  top: 35%;
  left: 0;
  right: 0;
`;
const AlbumSubTitle = styled.p`
  color: ${grayForTitle};
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
`;
function PictureField() {
  const { clicked, setClicked, setAlbum, setTracker } =
    useContext(ThemeContext);

  function handleClick(whichAlbum) {
    setClicked(!clicked);
    setTracker(0);
    if (whichAlbum === 0) {
      setAlbum(0);
    } else if (whichAlbum === 1) {
      setAlbum(1);
    } else if (whichAlbum === 2) {
      setAlbum(2);
    } else if (whichAlbum === 3) {
      setAlbum(3);
    } else if (whichAlbum === 4) {
      setAlbum(4);
    }
  }
  return (
    <Main>
      <Container>
        {Album.map((element, index) => (
          <Item>
            <Cover alt="Image Album 1" src={element.images[0]} />
            <Overlay onClick={() => handleClick(index)} which={index}>
              <AlbumTitle>{element.title}</AlbumTitle>
              <AlbumSubTitle>{element.images.length} Pieces</AlbumSubTitle>
            </Overlay>
          </Item>
        ))}
      </Container>
    </Main>
  );
}
export default PictureField;
