import styled from "styled-components";
import charity from "../../assets/charity.jpg";
import Buttons from "../../utilities/Buttons";
import {
  grayForParagraph,
  grayForTitle,
  primaryColor,
  pureWhite,
} from "../../utilities/Colors";
const Main = styled.div`
  background-color: ${pureWhite};
  width: 70%;
  margin: auto;
  color: ${grayForParagraph};
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding-top: 100px;
  padding-bottom: 100px;
`;
const MainText = styled.div`
  width: 100%;
`;
const MainPicture = styled.div``;
const Subtitle = styled.div`
  color: ${primaryColor};
`;
const Title = styled.h1`
  color: ${grayForTitle};
`;
const Paragraph = styled.div`
  padding-bottom: 20px;
`;
const Picture = styled.img`
  width: 100%;
`;

function Welcome() {
  return (
    <Main>
      <MainText>
        <Subtitle>Bienvenu</Subtitle>
        <Title>Nous somme une organisation world Wide</Title>
        <Paragraph>
          Nous vous sollicitons aujourd'hui avec une cause qui nous tient
          profondément à cœur. Notre organisation caritative s'efforce de faire
          une différence significative dans la vie de ceux qui sont dans le
          besoin, et nous avons besoin de votre aide pour continuer notre
          mission humanitaire. Chaque contribution que vous apportez compte. Que
          ce soit par le biais d'un don financier, de votre temps précieux en
          tant que bénévole, ou en partageant notre message avec votre réseau,
          vous contribuez à construire un avenir meilleur pour ceux qui luttent
          contre l'adversité.
        </Paragraph>
        <Buttons>Apprendre plus</Buttons>
      </MainText>
      <MainPicture>
        <Picture src={charity} alt="Man helping with boxes for charity" />
      </MainPicture>
    </Main>
  );
}
export default Welcome;
