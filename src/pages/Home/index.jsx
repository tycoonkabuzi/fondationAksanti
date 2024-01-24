import Nav from "../../components/Nav";
import Header from "../../components/Header";
import HowWeStarted from "../../components/HowWeStarted";
import { useState } from "react";
import Welcome from "../../components/Welcome";
import Stats from "../../components/Stats";
import HelpQuality from "../../components/HelpQuality";
import Team from "../../components/Team";

function Home() {
  return (
    <div>
      <div>
        <Nav />
        <Header />
        <Welcome />
        <HowWeStarted />
        <Stats />
        <HelpQuality />
        <Team />
      </div>
    </div>
  );
}

export default Home;
