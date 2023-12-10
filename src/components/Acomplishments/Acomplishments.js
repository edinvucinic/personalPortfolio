import React, { useState } from "react";
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
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  width: 200px; /* Adjust width as needed */
  height: 15px; /* Half the height */
  background-color: #eee;
  border-radius: 7px;
  margin-bottom: 10px; /* Adjust the space between bars */
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const Progress = styled.div`
  width: ${({ level }) => level}%; /* Set the width based on the skill level */
  height: 100%;
  background-color: #3498db; /* Change color based on the technology */
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px; /* Adjust font size as needed */
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
    { name: "CSS", level: 70 },
    { name: "JavaScript", level: 60 },
    { name: "React.js", level: 70 },
    { name: "Next.js", level: 60 },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <StyledSection>
      <Title>Skills</Title>
      <ProgressBarWrapper>
        {skillsData.map((skill, index) => (
          <SkillBox key={index}>
            <SkillTitle>{skill.name}</SkillTitle>
            <ProgressBar
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Progress
                className="progress-bar"
                data-level={skill.level}
                style={{
                  width: hoveredIndex === index ? "0%" : `${skill.level}%`,
                }}
              >
                {hoveredIndex === index ? "0%" : `${skill.level}%`}
              </Progress>
            </ProgressBar>
          </SkillBox>
        ))}
      </ProgressBarWrapper>
    </StyledSection>
  );
};

export default Skills;
