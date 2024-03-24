import styled, { keyframes } from "styled-components";
import dropDown from "../../assets/dropDown.png";
import apropos2 from "../../assets/apropos2.jpg";
import apropos3 from "../../assets/apropos3.jpg";
import apropos4 from "../../assets/apropos4.jpg";
import apropos5 from "../../assets/apropos5.jpg";
import {
  grayForParagraph,
  grayForTitle,
  primaryColor,
  shadowColor,
} from "../../utilities/Colors";
import { useState } from "react";
//keyframes
const fromUp = keyframes`
    from{
        transform: translateY(-20px);
    }
    to{
        transform: translateY(0);
    }
`;
const Main = styled.div``;

const AboutDescriptionOne = styled.div`
  width: 65%;
  margin: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: auto 50%;
  gap: 10%;

  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    width: 80%;
  }
  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    grid-template-columns: auto;
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (min-width: 1200px) {
    width: 65%;
    margin: auto;
    margin-top: 50px;
    display: grid;
    grid-template-columns: auto 50%;
    gap: 10%;
  }
`;
const AboutDescriptionTwo = styled.div`
  width: 65%;
  margin: auto;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 40% auto;
  gap: 10%;
  margin-top: 100px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: auto;
    gap: 0;
    width: 80%;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: auto;
    gap: 0;
    width: 80%;
  }
  @media only screen and (min-width: 768px) {
    grid-template-columns: auto;
  }
  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    grid-template-columns: auto auto;
  }
  @media only screen and (min-width: 1200px) {
    width: 65%;
    margin: auto;
    margin-top: 50px;
    display: grid;
    grid-template-columns: 40% auto;
    gap: 10%;
    margin-top: 100px;
  }
`;
const Images = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 5%;
`;
const LeftImages = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 18%;
  padding-top: 50px;
`;
const RightImages = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: 6%;
`;
const ImageOne = styled.div`
  width: 150px;
  height: 170px;
`;
const ImageTwo = styled.div`
  width: 150px;
  height: 170px;
`;
const ImageTree = styled.div`
  width: 150px;
  height: 170px;
`;
const ImageFour = styled.div`
  width: 150px;
  height: 170px;
`;
const Picture = styled.img`
  width: 100%;
`;
const Text = styled.div`
  width: 100%;
`;
const SmallTitle = styled.p`
  color: ${primaryColor};
`;
const Title = styled.h1`
  color: ${grayForTitle};
`;
const Paragraph = styled.p`
  color: ${grayForParagraph};
`;
const Dropdown = styled.div`
  border: 2px solid ${shadowColor};
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  width: 300px;
  padding-left: 50px;
  margin-bottom: 20px;
  cursor: pointer;
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;
const Icon = styled.div`
  width: 50px;

  ${(props) =>
    props.isActive === true
      ? `  transform: rotate(180deg) `
      : `transform:rotate(0) `}
`;
const ButtonText = styled.div`
  width: 200px;
  overflow: hidden;
`;
const DropedText = styled.div`
  overflow: hidden;
  ${(props) => (props.isActive === true ? `display:block; ` : `display:none;`)}
  animation: ${fromUp} 0.3s ease-in  alternate forwards;
`;
function AboutDescription() {
  const [active, setActive] = useState([
    { dropDown1: false, dropDown2: false },
  ]);

  const handleDrop = (which) => {
    if (which === "dropDownOne") {
      setActive([
        { dropDown1: !active[0].dropDown1, dropDown2: active[0].dropDown2 },
      ]);
    } else if (which === "dropDownTwo") {
      setActive([
        { dropDown1: active[0].dropDown1, dropDown2: !active[0].dropDown2 },
      ]);
    }
  };
  return (
    <Main>
      <AboutDescriptionOne>
        <Images>
          <LeftImages>
            <ImageOne>
              <Picture src={apropos4} alt="first picture" />
            </ImageOne>
            <ImageTwo>
              <Picture src={apropos2} alt="second picture" />
            </ImageTwo>
          </LeftImages>
          <RightImages>
            <ImageTree>
              <Picture src={apropos3} alt="Third picture" />
            </ImageTree>
            <ImageFour>
              <Picture src={apropos4} alt="Fourth picture" />
            </ImageFour>
          </RightImages>
        </Images>
        <Text>
          <SmallTitle>Depuis 2022</SmallTitle>
          <Title>À propos de la Fondation </Title>
          <Paragraph>
            Nous sommes une organisation engagée dans le développement social et
            située dans l'est de la République démocratique du Congo. Notre
            mission est de répondre aux besoins variés de la société en
            coopérant étroitement avec les habitants des quartiers urbains pour
            identifier et résoudre efficacement les problèmes locaux.
            <br />
            <br />
            En travaillant en partenariat avec les communautés locales, nous
            cherchons à renforcer les capacités et à promouvoir le développement
            durable, en encourageant la participation active et la collaboration
            de tous les membres de la société. <br /> <br />
            Nous intervenons dans plusieurs domaines pour améliorer la qualité
            de vie des populations. L'un de nos principaux objectifs est de
            garantir un accès facile à l'eau potable. Nous travaillons en
            collaboration avec les communautés locales pour mettre en place des
            infrastructures d'approvisionnement en eau sûres et durables, des
            systèmes de filtration et des réseaux de distribution.
          </Paragraph>
        </Text>
      </AboutDescriptionOne>
      <AboutDescriptionTwo>
        <Text>
          <Title>Engagement des jeunes </Title>
          <Paragraph>
            En outre, nous nous engageons à autonomiser les jeunes en leur
            offrant des opportunités d'éducation, de formation professionnelle
            et d'entrepreneuriat. Pour les femmes de Goma, nous avons mis en
            place des projets spécifiques visant à promouvoir leur
            autonomisation économique et sociale. Nous offrons des formations en
            artisanat, couture,agriculture et gestion d'entreprise pour les
            aider à développer des compétences professionnelles et à créer leurs
            propres sources de revenus.
            <br />
            <br />
            <Dropdown onClick={() => handleDrop("dropDownOne")}>
              <ButtonText>Aide aux personne deplacée</ButtonText>
              <Icon isActive={active[0].dropDown1}>
                <Picture alt="dropDown" src={dropDown} />
              </Icon>
            </Dropdown>
            <DropedText isActive={active[0].dropDown1}>
              Nous intervenons également en aide aux personnes déplacées, en
              leur fournissant un soutien vital tel que des abris temporaires,
              des vivres et des services de santé de base. Notre objectif est
              d'offrir une assistance humanitaire immédiate et de contribuer à
              leur réinstallation et à leur réintégration dans la société.
              <br></br> <br></br>
            </DropedText>
            <Dropdown onClick={() => handleDrop("dropDownTwo")}>
              <ButtonText>Initiation en informatique</ButtonText>
              <Icon isActive={active[0].dropDown2}>
                <Picture alt="dropDown" src={dropDown} />
              </Icon>
            </Dropdown>
            <DropedText isActive={active[0].dropDown2}>
              Parallèlement, nous reconnaissons l'importance croissante de la
              maîtrise des outils informatiques dans le monde moderne. C'est
              pourquoi nous mettons en place des initiatives visant à enseigner
              les bases de l'informatique aux jeunes et aux adultes de la
              région. Nous offrons des cours pratiques sur l'utilisation des
              ordinateurs, des logiciels bureautiques et d'autres compétences
              numériques essentielles pour améliorer leur employabilité et leur
              accès aux opportunités économiques.
              <br></br> <br></br>
            </DropedText>
          </Paragraph>
        </Text>
        <Images>
          <Picture alt="Man and woman on a date" src={apropos5} />
        </Images>
      </AboutDescriptionTwo>
    </Main>
  );
}
export default AboutDescription;
