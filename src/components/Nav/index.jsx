import logo from "../../assets/logo.png";
import styled, { css, keyframes } from "styled-components";
import PrimaryButton from "../../utilities/Buttons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { primaryColor } from "../../utilities/Colors";
const updown = keyframes`
  from{
    transform: translateY(-100px);
  }
  to{
    transform: translateY(0px);
  }
`;
const Main = styled.div`
  position: relative;
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
  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    background-color: ${primaryColor};
    width: 70%;
    position: fixed;
    right: 0;
    top: -20px;
    height: 500px;
    padding-top: 100px;

    ${(props) =>
      props.isClicked === true
        ? `transform:translateX(0);`
        : ` transform: translateX(1000px);`}
  }
  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    background-color: ${primaryColor};
    width: 70%;
    position: fixed;
    right: 0;
    top: -20px;
    height: 500px;
    padding-top: 100px;

    ${(props) =>
      props.isClicked === true
        ? `transform:translateX(0);`
        : ` transform: translateX(1000px);`}
  }
  transition: transform ease-in-out 0.3s;
  @media only screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    list-style-type: none;
    transform: translate(0);
    width: 100%;
    height: auto;
    background-color: transparent;
    position: relative;
    padding-top: 30px;
  }
`;
const Links = styled(Link)`
  font-size: 0.8rem;
  margin-right: 2rem;
  color: white;
  text-decoration: none;
  @media only screen and (max-width: 600px) {
    margin-left: -100px;
    font-size: 20px;
  }

  &:hover {
    border-bottom: solid 2px rgb(237, 178, 42);
    color: rgb(237, 178, 42);
    cursor: pointer;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 0.8rem;
    margin-right: 2rem;
    color: white;
  }
`;
const Logo = styled.img`
  width: 160px;
`;
const Hamburger = styled.div`
  width: 40px;
  height: 40px;
  display: none;
  position: absolute;
  display: block;
  right: 20px;
  top: 40px;
  display: none;
  ${(props) => props.scrolled === true && `top:20px;`};
  @media only screen and (max-width: 600px) {
    display: block;
  }
  @media only screen and (min-width: 600px) {
    display: block;
  }
  @media only screen and (min-width: 1200px) {
    display: none;
  }
`;
const Line = styled.span`
  display: block;
  width: 40px;
  height: 2px;
  background-color: white;
  margin-bottom: 10px;
  transition: transform 0.3s ease-in-out;
  ${(props) => props.first && props.isClicked === true && `display:none;`}

  ${(props) =>
    props.second &&
    props.isClicked === true &&
    ` transform:rotate(40deg); margin-top:20px `}
    
  ${(props) =>
    props.third &&
    props.isClicked === true &&
    ` transform:rotate(-40deg); margin-top:-12px`}
`;

function Nav() {
  const [scroll, setScroll] = useState(false);
  const [clicked, setCliked] = useState(false);
  function handleClick() {
    setCliked(!clicked);
  }
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
      <MainLinks isClicked={clicked}>
        <Links to="/">ACCUEIL</Links>
        <Links to="/apropos">APROPOS</Links>
        <Links to="/gallery">GALLERY</Links>
        <Links to="/impact">NOTRE IMPACT</Links>
      </MainLinks>
      <Hamburger onClick={handleClick} scrolled={scroll}>
        <Line first isClicked={clicked}></Line>
        <Line second isClicked={clicked}></Line>
        <Line third isClicked={clicked}></Line>
      </Hamburger>
      <PrimaryButton scroll={scroll}>CONTACTEZ NOUS</PrimaryButton>
    </Main>
  );
}
export default Nav;
