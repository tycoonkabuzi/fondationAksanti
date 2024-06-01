import styled, { keyframes } from "styled-components";
import aksantiKabuzi from "../../assets/aksanti.jpg";
import muheriWakiri from "../../assets/muheri wakiri.jpg";
import moiseSebushari from "../../assets/moise sebushari.jpg";
import kevine from "../../assets/kevine bahinyu.jpg";
import believeLukwanya from "../../assets/billy lukwanya.jpg";
import christianLouga from "../../assets/Christian nsi.jpg";
import luandaDunia from "../../assets/luanda dunia.jpg";

const zoom = keyframes` from {
    transform: scale(1);
} to{
transform: scale(1.3);
}`;

const Main = styled.div`
  color: #373636;
  padding-top: 50px;
  padding-bottom: 100px;
`;
const MainTitle = styled.div`
  width: 20%;
  margin: auto;
  text-align: center;
  line-height: 10px;
  padding-bottom: 50px;

  @media only screen and (max-width: 600px) {
    width: 80%;
  }
  @media only screen and (min-width: 600px) {
    width: 80%;
  }
`;
const SubTitle = styled.div`
  color: rgb(29, 128, 204);
`;
const ContainerTeam = styled.div`
  display: grid;

  width: 80%;
  margin: auto;
  padding-left: 10%;
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: auto auto;
    width: 100%;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto;
    width: 80%;
  }
`;
const Item = styled.div`
  line-height: 0px;
  padding-bottom: 50px;
`;
const Name = styled.h3``;
const Position = styled.div``;
const Picture = styled.img`
  width: 100%;
  scale: 1;
  &:hover {
    animation: ${zoom} 2s ease-in-out both;
  }
`;
const Title = styled.h1``;
const ImageContainer = styled.div`
  overflow: hidden;
  width: 250px;
  height: 300px;
`;
function Team() {
  return (
    <Main>
      <MainTitle>
        <SubTitle>Team</SubTitle>
        <Title>Notre Equipe D'elite</Title>
      </MainTitle>
      <ContainerTeam>
        <Item>
          <ImageContainer>
            <Picture src={aksantiKabuzi} />
          </ImageContainer>
          <Name>Aksanti Kabuzi</Name>
          <Position>President</Position>
        </Item>
        <Item>
          <ImageContainer>
            <Picture src={muheriWakiri} />
          </ImageContainer>
          <Name>Muheri Wakiri Tresor Makombe</Name>
          <Position>Chargé des relations publiques</Position>
        </Item>

        <Item>
          <ImageContainer>
            <Picture src={luandaDunia} />
          </ImageContainer>
          <Name>Luanda Dunia</Name>
          <Position>Chargé des relations publiques</Position>
        </Item>

        <Item>
          <ImageContainer>
            <Picture src={moiseSebushari} />
          </ImageContainer>
          <Name>Moïse Sebushari</Name>
          <Position>directeur marketing</Position>
        </Item>
        <Item>
          <ImageContainer>
            <Picture src={kevine} />
          </ImageContainer>
          <Name>Kevine</Name>
          <Position>chargé de la comptabilité</Position>
        </Item>
        <Item>
          <ImageContainer>
            <Picture src={believeLukwanya} />
          </ImageContainer>
          <Name>Beleive Lukwanya</Name>
          <Position>secrétaire</Position>
        </Item>

        <Item>
          <ImageContainer>
            <Picture src={christianLouga} />
          </ImageContainer>
          <Name>Christian Louga</Name>
          <Position>Christian Louga</Position>
        </Item>
      </ContainerTeam>
    </Main>
  );
}
export default Team;
