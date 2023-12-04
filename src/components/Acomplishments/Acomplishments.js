import React, { useEffect } from "react";
import styled from "styled-components";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const StyledSection = styled.section`
  /* Your section styles */
`;

const Title = styled.h2`
  /* Your section title styles */
`;

const ProgressBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px; /* Adjust the padding as needed */
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillTitle = styled.h3`
  /* Your skill title styles */
  margin-bottom: 10px;
`;

const ProgressBar = styled.div`
  width: 200px; /* Adjust width as needed */
  height: 30px; /* Double the height */
  background-color: #eee;
  border-radius: 15px;
  margin-bottom: 20px; /* Increased space between bars */
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Progress = styled.div`
  width: ${({ level }) => level}%; /* Set the width based on the skill level */
  height: 100%;
  background-color: #3498db; /* Change color based on the technology */
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px; /* Adjust font size as needed */
  transition: width 1s linear; /* Transition for the loading effect */
`;

const animateProgressBar = (progressBar, level) => {
  let width = 0;
  let iterations = 0;
  const animate = () => {
    width++;
    progressBar.style.width = `${width}%`;
    progressBar.innerText = `${width}%`;
    if (width >= level) {
      width = 0;
      iterations++;
      if (iterations >= 6) return;
    }
    requestAnimationFrame(animate);
  };
  animate();
};

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 60 },
    { name: "JavaScript", level: 50 },
    { name: "React.js", level: 40 },
    { name: "Next.js", level: 30 },
  ];

  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");

    progressBars.forEach((progressBar) => {
      const level = parseInt(progressBar.getAttribute("data-level"));
      animateProgressBar(progressBar, level);
    });
  }, []);

  return (
    <StyledSection>
      <Title>Skills</Title>
      <ProgressBarWrapper>
        {skillsData.map((skill, index) => (
          <SkillBox key={index}>
            <SkillTitle>{skill.name}</SkillTitle>
            <ProgressBar>
              <Progress
                className="progress-bar"
                data-level={skill.level}
                style={{ width: "0%" }}
              >
                0%
              </Progress>
            </ProgressBar>
          </SkillBox>
        ))}
      </ProgressBarWrapper>
    </StyledSection>
  );
};

export default Skills;
