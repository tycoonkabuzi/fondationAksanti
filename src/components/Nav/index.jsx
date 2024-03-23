import logo from "../../assets/logo.png";
import styled, { css, keyframes } from "styled-components";
import PrimaryButton from "../../utilities/Buttons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const updown = keyframes`
  from{
    transform: translateY(-100px);
  }
  to{
    transform: translateY(0px);
  }
`;
const Main = styled.div`
  height: 4rem;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  justify-items: center;
  padding-top: 20px;
  position: absolute;
  width: 100%;
  z-index: 3;

  ${(prop) =>
    prop.scroll === true
      ? css`background-color: rgb(29, 128, 204);  animation: ${updown} 0.5s ease-in-out ;
     position:fixed;
     z-index=1;
      padding-top: 0px;
  `
      : ``}
`;
const MainLinks = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
`;
const Links = styled(Link)`
  font-size: 0.8rem;
  margin-right: 2rem;
  color: white;
  text-decoration: none;
  @media only screen and (max-width: 600px) {
    display: none;
  }

  &:hover {
    border-bottom: solid 2px rgb(237, 178, 42);
    color: rgb(237, 178, 42);
    cursor: pointer;
  }
`;
const Logo = styled.img`
  width: 160px;
`;
const Hamburger = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
  }
`;
const Line = styled.span`
  display: block;
  width: 40px;
  height: 2px;
  background-color: white;
  margin-bottom: 10px;
`;
function Nav() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <Main scroll={scroll}>
      <Logo
        src={logo}
        className="logo"
        alt="logo Fondation Aksanti kabuzi paul"
      />
      <MainLinks>
        <Links to="/">ACCUEIL</Links>
        <Links to="/apropos">APROPOS</Links>
        <Links to="/gallery">GALLERY</Links>
        <Links>NOTRE IMPACT</Links>
      </MainLinks>
      <Hamburger>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </Hamburger>
      <PrimaryButton scroll={scroll}>CONTACTEZ NOUS</PrimaryButton>
    </Main>
  );
}
export default Nav;
