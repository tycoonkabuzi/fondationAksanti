import styled from "styled-components";
import left from "../../assets/left.jpg";
import right from "../../assets/right.jpg";
const Main = styled.div`
  background-color: #f0f0f0;
  padding-top: 20px;
  padding-bottom: 40px;
  height: 200px;
  color: #373636;
`;
const Container = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
`;
const Title = styled.h1`
  text-align: center;
`;
const SpecialText = styled.span`
  color: rgb(29, 128, 204);
`;
const Picture = styled.img`
  width: 100%;
`;
const LeftContainer = styled.div`
  width: 20%;
  border-radius: 20%;
  background-color: red;
`;
const RightContainer = styled.div``;
const Paragraphe = styled.p``;
function HowWeStarted() {
  return (
    <Main>
      <Container>
        <Title>Comment nous avons commencer</Title>
        <Paragraphe>
          In the heart of Goma, a <SpecialText>compassionate</SpecialText>{" "}
          vision sprouted into a foundation dedicated to making a{" "}
          <SpecialText>difference</SpecialText>
          . Born from a collective desire to address the challenges faced by the
          community, this foundation focuses on providing essential resources,
          fostering education, and improving healthcare.
          <Paragraphe />
          With a committed team and support from local and international
          partners, it has become a catalyst for positive change, aiming to
          empower lives and sow the seeds of a
          <SpecialText> brighter</SpecialText> future in Goma.
        </Paragraphe>
      </Container>
      <LeftContainer>
        <Picture src={left} />
      </LeftContainer>
      <RightContainer>
        <Picture src={right} />
      </RightContainer>
    </Main>
  );
}
export default HowWeStarted;
