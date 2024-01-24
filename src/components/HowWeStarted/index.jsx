import styled from "styled-components";
import left from "../../assets/left.jpg";
import right from "../../assets/right.jpg";
const Main = styled.div`
  background-color: #f0f0f0;
  padding-top: 50px;
  color: #373636;
  padding-bottom: 50px;
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
const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 200px;
  overflow: hidden;
  z-index: 1;
  margin: auto;
  position: absolute;
  z-index: 1;
  ${(props) =>
    props.left
      ? `  bottom: -150px;`
      : props.right
      ? ` right: 20px;bottom:-155px;`
      : null}
`;
const BannerText = styled.div`
  width: 150px;
  position: absolute;
  border-radius: 15px;
  padding: 10px;
  background-color: rgb(29, 128, 204);
  color: white;
  z-index: 1;
  ${(props) =>
    props.left
      ? `  bottom: -30px;`
      : props.right
      ? ` right: 20px;bottom:-170px;`
      : null}
`;
const Paragraphe = styled.p``;
const SmallImages = styled.div`
  width: 90%;
  background-color: red;
  margin: auto;
  position: relative;
  bottom: 200px;
  justify-content: space-between;
`;
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
      <SmallImages>
        <ImageContainer left>
          <Picture src={left} />
        </ImageContainer>
        <ImageContainer right>
          <Picture src={right} />
        </ImageContainer>
        <BannerText left> Compassionate</BannerText>
        <BannerText right> Difference</BannerText>
      </SmallImages>
    </Main>
  );
}
export default HowWeStarted;
