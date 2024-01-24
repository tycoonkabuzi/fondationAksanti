import styled, { keyframes } from "styled-components";
import home from "../../assets/home.png";
import medecine from "../../assets/medecine.png";
import water from "../../assets/water.png";
import volunteer from "../../assets/volunteer.jpg";
import Button from "../../utilities/Buttons";
const zoom = keyframes` from {
    transform: scale(0.9);
} to{
transform: scale(1);
}`;
const Main = styled.div`
  padding-top: 50px;
  background-image: url(${volunteer});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100%;
  padding-bottom: 100px;
`;
const Title = styled.h1`
  text-align: center;
  color: #6b6b6b;
  line-height: 0px;
  padding-bottom: 50px;
`;
const Subtitle = styled.div`
  text-align: center;
  color: rgb(29, 128, 204);
`;
const MainTitle = styled.div``;
const ContainerHelp = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 80%;
  margin: auto;
  gap: 50px;
`;
const Item = styled.div`
  background-color: white;
  color: #373636;
  width: 350px;
  height: 350px;
  box-shadow: 1px 2px 30px #9a9a9a;
  transform: scale(0.9);
  &:hover {
    animation: ${zoom} 0.3s ease-in-out both;
  }
`;
const Icon = styled.img`
  width: 100px;
`;
const TitleItem = styled.h3`
  text-align: center;
`;
const ContainerItem = styled.div`
  padding-top: 50px;
  width: 44%;
  margin: auto;
`;
function HelpQuality() {
  return (
    <Main>
      <MainTitle>
        <Subtitle>Nos oeuvres</Subtitle>
        <Title>Qu'est ce que nous donnons au gens</Title>
      </MainTitle>
      <ContainerHelp>
        <Item>
          <ContainerItem>
            <Icon src={home} alt="icon home" />{" "}
            <TitleItem>Lieu ou vivre</TitleItem>
            <Button>Divergeance</Button>
          </ContainerItem>
        </Item>
        <Item>
          <ContainerItem>
            <Icon src={water} alt="icon water tap" />
            <TitleItem>Access a l'eau </TitleItem>
            <Button>Voir les actions</Button>
          </ContainerItem>
        </Item>
        <Item>
          <ContainerItem>
            <Icon src={medecine} alt="icon medecine" />{" "}
            <TitleItem>Access aux medicaments</TitleItem>
            <Button>Apprendre plus</Button>
          </ContainerItem>
        </Item>
      </ContainerHelp>
    </Main>
  );
}
export default HelpQuality;
