import styled from "styled-components";
const Main = styled.div`
  height: 200px;
  background-color: rgb(237, 178, 42);
  color: #373636;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
const Stat = styled.div`
  margin: auto;
`;
const Record = styled.h1`
  font-weight: 600;
  font-size: 45px;
  line-height: 10px;
`;
const Title = styled.p``;

function Stats() {
  return (
    <Main>
      <Stat>
        <Record>23K</Record>
        <Title>Projet terminé</Title>
      </Stat>
      <Stat>
        <Record>12M+</Record>
        <Title>Bureau au tours</Title>
      </Stat>
      <Stat>
        <Record>95M</Record>
        <Title>Vues</Title>
      </Stat>
      <Stat>
        <Record>5K</Record>
        <Title> Abonees</Title>
      </Stat>
    </Main>
  );
}
export default Stats;
