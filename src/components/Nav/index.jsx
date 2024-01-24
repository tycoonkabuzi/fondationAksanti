import logo from "../../assets/logo.png";
import styled, { css, keyframes } from "styled-components";
import PrimaryButton from "../../utilities/Buttons";
import { useEffect, useState } from "react";
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
const Links = styled.li`
  font-size: 0.8rem;
  margin-right: 2rem;
  color: white;
  &:hover {
    border-bottom: solid 2px rgb(237, 178, 42);
    color: rgb(237, 178, 42);
    cursor: pointer;
  }
`;
const Logo = styled.img`
  width: 160px;
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
        <Links>ACCUEIL</Links>
        <Links>NOTRE IMPACT</Links>
        <Links>GALLERY</Links>
        <Links>APROPOS</Links>
      </MainLinks>
      <PrimaryButton scroll={scroll}>CONTACTEZ NOUS</PrimaryButton>
    </Main>
  );
}
export default Nav;
