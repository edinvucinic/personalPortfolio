import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => {
  const downloadCV = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/docs/mycv.pdf"; // Path to the CV file
    link.download = "My_CV.pdf"; // File name when downloaded

    // Simulate click on the link to trigger download
    document.body.appendChild(link);
    link.click();

    // Clean up after the download
    document.body.removeChild(link);
  };

  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          "Hello and welcome! I'm a Frontend Developer diving into the world of
          React and Next.js, whipping up apps that pack a punch. Let's connect
          and explore how my skills can contribute to you and your team's
          success."
        </SectionText>
        <Button onClick={downloadCV}>Get CV</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
