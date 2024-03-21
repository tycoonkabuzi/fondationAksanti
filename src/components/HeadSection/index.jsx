import styled from "styled-components";
import aboutImage from "../../assets/about.jpg";
import gallery from "../../assets/gallery.jpg";
import {
  aproposBackground,
  pureWhite,
  whiteBackground,
} from "../../utilities/Colors";
import { useEffect, useState } from "react";

const Main = styled.div`
  ${(props) =>
    props.whichPage === "Apropos"
      ? `background-image:url(${aboutImage});  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 76%);`
      : props.whichPage === "Gallery"
      ? `background-image:url(${gallery}); clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 100%, 100% 100%, 50% 79%, 0 100%, 0% 70%, 0% 35%, 0 0); );
 ;`
      : `none`}
  background-repeat: no-repeat;
  background-size: cover;

  height: 400px;
  position: relative;
  &::after {
    content: "";
    background-color: ${aproposBackground};
    position: absolute;
    z-index: 1;
    height: 400px;
    width: 100%;
  }
`;
const Container = styled.div`
  position: absolute;
  z-index: 2;

  width: 100%;
  top: 150px;
`;
const Title = styled.h1`
  margin: 0;
  color: ${pureWhite};
  text-align: center;
`;
const Paragraph = styled.p`
  color: ${whiteBackground};
  text-align: center;
`;
function HeadSection({ title }) {
  const [content, setContent] = useState({ theTitle: "", theText: "" });
  useEffect(() => {
    switch (true) {
      case title === "appropos":
        setContent((props) => ({
          ...props,
          theTitle: "Apropos",
          theText: "Une histoire nous concernant",
        }));
        break;
      case title === "gallery":
        setContent((props) => ({
          ...props,
          theTitle: "Gallery",
          theText: "Ceci c'est notre gallery des photos",
        }));
        break;
      default:
        console.log("Error");
    }
  }, [title]);
  return (
    <Main whichPage={content.theTitle}>
      <Container>
        <Title>{content.theTitle} </Title>
        <Paragraph>{content.theText}</Paragraph>
      </Container>
    </Main>
  );
}
export default HeadSection;
