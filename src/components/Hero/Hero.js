import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import Typist from "react-typist";

const Hero = () => {
  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = "/documents/EdinVucinicCV02.pdf"; // File URL in the public/documents folder
    link.download = "EdinVucinicCV02.pdf"; // File name when downloaded

    // Open system dialog for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <Typist cursor={{ show: false }}>
          <SectionTitle main center>
            <Typist.Delay ms={500} />
            Welcome To <br />
            <Typist.Delay ms={300} />
            My Personal Portfolio
          </SectionTitle>
          <SectionText>
            <Typist.Delay ms={500} />
            "Hello and welcome! I'm a Frontend Developer diving into the world
            of React and Next.js, creating apps that pack a punch. Let's connect
            and explore how my skills can contribute to you and your team's
            success."
          </SectionText>
        </Typist>
        <Button onClick={downloadCV}>Download CV</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
