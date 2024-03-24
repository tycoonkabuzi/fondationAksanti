import Nav from "../../components/Nav";
import Header from "../../components/Header";
import HowWeStarted from "../../components/HowWeStarted";
import { useState } from "react";
import Welcome from "../../components/Welcome";
import Stats from "../../components/Stats";
import HelpQuality from "../../components/HelpQuality";
import Team from "../../components/Team";
import Footer from "../../components/Footer";
import styled from "styled-components";
const Main = styled.div`
  overflow: hidden;
`;
function Home() {
  return (
    <Main>
      <Nav />
      <Header />
      <Welcome />
      <HowWeStarted />
      <Stats />
      <HelpQuality />
      <Team />
      <Footer />
    </Main>
  );
}

export default Home;
