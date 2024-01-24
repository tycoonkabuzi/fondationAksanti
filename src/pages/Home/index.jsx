import Nav from "../../components/Nav";
import Header from "../../components/Header";
import HowWeStarted from "../../components/HowWeStarted";

import { useState } from "react";
import Welcome from "../../components/Welcome";
import Stats from "../../components/Stats";
import HelpQuality from "../../components/HelpQuality";

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
      </div>
    </div>
  );
}

export default Home;
