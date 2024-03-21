import styled, { keyframes } from "styled-components";
import man1 from "../../assets/Man1.jpg";
import woman1 from "../../assets/Woman1.jpg";
import man2 from "../../assets/Man2.jpg";
import woman2 from "../../assets/Woman2.jpg";
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
`;
const SubTitle = styled.div`
  color: rgb(29, 128, 204);
`;
const ContainerTeam = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 80%;
  margin: auto;
  padding-left: 10%;
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
            <Picture src={man1} />
          </ImageContainer>
          <Name>Aksanti Kabuzi</Name>
          <Position>President</Position>
        </Item>
        <Item>
          <ImageContainer>
            <Picture src={woman1} />
          </ImageContainer>
          <Name>Muheri Wakiri Tresor Makombe</Name>
          <Position>Chargé des relations publiques</Position>
        </Item>
        <Item>
          <ImageContainer>
            <Picture src={man2} />
          </ImageContainer>
          <Name>Moïse Sebushari</Name>
          <Position>directeur marketing</Position>
        </Item>
        <Item>
          <ImageContainer>
            <Picture src={woman2} />
          </ImageContainer>
          <Name>Kevine</Name>
          <Position>chargé de la comptabilité</Position>
        </Item>
        <Item>
          <ImageContainer>
            <Picture src={woman2} />
          </ImageContainer>
          <Name>Beleive Lukwanya</Name>
          <Position>secrétaire</Position>
        </Item>

        <Item>
          <ImageContainer>
            <Picture src={woman2} />
          </ImageContainer>
          <Name>Christian Louga</Name>
          <Position>Christian Louga</Position>
        </Item>
      </ContainerTeam>
    </Main>
  );
}
export default Team;
