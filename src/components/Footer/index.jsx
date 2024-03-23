import styled from "styled-components";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import { darkblue, footerColor, pureWhite } from "../../utilities/Colors";
import { Link } from "react-router-dom";
const Main = styled.div`
  background-color: ${darkblue};
`;
const Container = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: auto auto auto;
  padding-top: 50px;
  padding-bottom: 50px;
  align-items: center;
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
`;
const Logo = styled.div`
  width: 200px;
`;
const TheLinks = styled.div`
  display: grid;
  grid-template-columns: auto;
  border-left: 1px solid ${footerColor};
  padding-left: 30px;
  align-items: center;
  padding-bottom: 20px;
`;
const ContainerLinks = styled.ul`
  margin-left: -40px;
`;
const Links = styled(Link)`
  text-decoration: none;
  color: ${footerColor};
  margin-right: 10px;
  &:hover {
    color: ${pureWhite};
  }
`;
const Socials = styled.div`
  display: grid;
  grid-template-columns: 40px 40px 40px 40px;
`;
const Picture = styled.img`
  width: 100%;
`;
const Item = styled.div`
  width: 25px;
`;

const Copyright = styled.div`
  color: ${footerColor};
  width: 400px;
  @media only screen and (max-width: 600px) {
    width: 300px;
  }
`;
function Footer() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return (
    <Main>
      <Container>
        <Logo>
          <Picture alt="Logo of the company" src={logo} />
        </Logo>
        <TheLinks>
          <ContainerLinks>
            <Links to="/">Accueil</Links>
            <Links to="/apropos">Apropos</Links>
            <Links to="/gallery">Gallery</Links>
            <Links>Notre Impact</Links>
          </ContainerLinks>
          <Copyright>
            {currentYear} Fondation Aksanti Kabuzi Paul all right reserved
          </Copyright>
        </TheLinks>
        <Socials>
          <Item>
            <Picture alt="facebook" src={facebook} />
          </Item>
          <Item>
            <Picture alt="twitter" src={twitter} />
          </Item>
          <Item>
            <Picture alt="youtube" src={youtube} />
          </Item>
          <Item>
            <Picture alt="instagram" src={instagram} />
          </Item>
          <Copyright>Support: info@aksantikabuzipaulfondation.org</Copyright>
        </Socials>
      </Container>
    </Main>
  );
}
export default Footer;
