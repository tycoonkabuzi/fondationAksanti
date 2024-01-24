import styled, { keyframes } from "styled-components";

const Main = styled.div`
  background-color: #f8f8f8;
  height: 800px;
  opacity: 0.5;
`;
const Container = styled.div`
  width: 80%;
  margin: auto;
`;
const Menu = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
`;
const Logo = styled.div`
  width: 200px;
  height: 50px;
  background-color: #e6e6e6;
`;
const MainLinks = styled.div`
  display: flex;
`;
const Links = styled.div`
  width: 100px;
  height: 20px;
  background-color: #e6e6e6;
  margin-right: 20px;
`;
const Contact = styled.div`
  width: 200px;
  height: 40px;
  background-color: #e6e6e6;
`;
const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-top: 150px;
  gap: 20px;
`;
const MainText = styled.div``;
const Title = styled.div`
  width: 300px;
  height: 50px;
  background-color: #e6e6e6;
`;
const Text = styled.div`
  width: 600px;
  height: 20px;
  background-color: #e6e6e6;
  margin-top: 20px;
`;
const ImageLogo = styled.div`
  width: 370px;
  height: 330px;
  background-color: #e6e6e6;
`;
const Donate = styled.div`
  width: 200px;
  height: 40px;
  background-color: #e6e6e6;
  margin-top: 100px;
`;

function Loading() {
  return (
    <Main>
      <Container>
        <Menu>
          <Logo />
          <MainLinks>
            <Links /> <Links />
            <Links /> <Links />
          </MainLinks>
          <Contact />
        </Menu>

        <HeaderContainer>
          <MainText>
            <Title />
            <Text />
            <Text />
            <Text />
            <Text />
            <Text />

            <Donate />
          </MainText>
          <ImageLogo />
        </HeaderContainer>
      </Container>
    </Main>
  );
}
export default Loading;
