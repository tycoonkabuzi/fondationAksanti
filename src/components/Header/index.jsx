import cover1 from "../../assets/background.jpg";
import cover2 from "../../assets/background2.jpg";
import cover3 from "../../assets/background3.jpg";
import cover4 from "../../assets/background4.jpg";
import logo2 from "../../assets/logo2.png";
import styled from "styled-components";
import arrow from "../../assets/arrow.png";
import PrimaryButton from "../../utilities/Buttons";
import TypingAnimation from "../../utilities/TypingAnimation";
import RandomImages from "../../utilities/RandomImages";
import { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { darkblue, primaryColor } from "../../utilities/Colors";
const upDowns = keyframes`
  0% {
        transform: translateY(-90%);
    }

    100% {
        transform: translateY(0);
    }`;

const textMoving = keyframes`
    0% {
        transform: translateX(-200%);
    }

    100% {
        transform: translatex(0);
    }
`;

const typingText = keyframes` 
    0% {
        transform: translateX(-200%);
    }

    100% {
        transform: translatex(0);
    }
`;
const Main = styled.div`
  height: 1000px;
`;
const CoverImages = styled.div`
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0%;

  &::before {
    content: "";
    background-color: ${darkblue};
    width: 100%;
    height: inherit;
    position: absolute;
    z-index: 1;
    opacity: 0.7;
  }
`;
const Title = styled.h1``;
const MainTextFondation = styled.div`
  position: absolute;
  display: grid;
  z-index: 2;

  top: 25%;
  z-index: 1;
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
  }

  @media only screen and (min-width: 600px) {
    grid-template-columns: auto;
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: 50% 40%;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 50% 40%;
    grid-gap: 10%;
  }
`;
const SignatureAks = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
`;
const MainSignature = styled.div`
  font-family: "Great Vibes", cursive;
`;
const Line = styled.hr`
  display: block;
  width: 50%;
  height: 200px;
  /* Adjust based on desired height */
  background: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Cpath fill='none' stroke='%23000' stroke-linecap='round' d='M436 129h-1M457 96l-1-1'%3E%3C/path%3E%3Cpath fill='none' stroke='%23edb22a' stroke-width='3' d='M148.82359 258.72426c-4.28661.49167-7.11233.59517-5.71549.49167 47.51351-3.5206 139.49422-22.13473 294.34751-35.40036 35.35018-3.0283 91.28477-6.32538 130.0273-7.86675 17.09204-.68001-7.67382 5.57615-97.16325 23.10857-86.25206 16.89817-138.79823 26.9084-164.32021 31.46699-18.72468 3.34449-29.20997 5.6927 10.0021.49167 61.45978-8.15193 78.24449-12.20062 120.0252-16.22517 11.34659-1.09297 34.9681 3.59452 0 21.63355-33.64877 17.35842-57.15486 31.95866-71.44357 43.75878l-1.42887 7.37508 1.42887 1.47502L386.01625 331'%3E%3C/path%3E%3C/svg%3E")
    no-repeat center;
  border: none;
  margin-left: inherit;
  margin-top: -45px;
`;
const MainLogo = styled.div`
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 600px) {
    display: none;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (min-width: 992px) {
    display: block;
  }
  @media only screen and (min-width: 1200px) {
    display: block;
  }
`;
const Arrow = styled.img`
  background-color: ${primaryColor};
  width: 40px;
  height: 40px;
  position: absolute;
  z-index: 2;
  bottom: 20px;
  left: 50%;
  border-radius: 20px;
  animation-name: ${upDowns};
  animation-duration: 2s;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
`;
const LogoFondation = styled.img`
  width: 80%;
  margin-top: -50px;
`;
const TextFondation = styled.div`
  color: rgb(211, 211, 211);
  margin-left: 150px;
  @media only screen and (max-width: 600px) {
    margin-left: 40px;
    margin-right: 50px;
  }
  @media only screen and (min-width: 600px) {
    margin-left: 60px;
    margin-right: 50px;
  }
  @media only screen and (min-width: 768px) {
    margin-left: 60px;
    margin-right: 50px;
  }

  @media only screen and (min-width: 992px) {
    margin-left: 150px;
  }
  @media only screen and (min-width: 1200px) {
    margin-left: 150px;
  }
`;
function Header({ imageLoad, setImageLoad }) {
  return (
    <Main>
      <CoverImages>
        <RandomImages
          images={[cover1, cover2, cover3, cover4]}
          imageLoad={imageLoad}
          setImageLoad={setImageLoad}
        />
      </CoverImages>
      <MainTextFondation>
        <TextFondation>
          <Title>Bienvenue à la Fondation</Title>
          <TypingAnimation
            text="Nous croyons en un avenir meilleur pour tous. Chez la Fondation
          Aksanti Kabuzi paul, notre mission est de catalyser le changement
          positif en soutenant des causes essentielles qui ont un impact
          durable. Nous nous efforçons de construire des ponts vers un monde
          plus équitable, en mettant l'accent sur l'éducation, la santé,
          l'environnement, et bien plus encore."
            time="70"
          />
          <MainSignature>
            <SignatureAks> Aksanti Kabuzi Paul</SignatureAks>
            <Line />
          </MainSignature>
          <PrimaryButton> Donate</PrimaryButton>
        </TextFondation>
        <MainLogo>
          <LogoFondation alt="imageLogo fondation AksantiKabuzi" src={logo2} />
        </MainLogo>
      </MainTextFondation>
      <Arrow src={arrow} alt="arrow" />
    </Main>
  );
}
export default Header;
