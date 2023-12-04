import React from "react";
import styled from "styled-components";
import {
  Section,
  SectionDivider,
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
`;

const SkillBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillTitle = styled.h3`
  /* Your skill title styles */
`;

const CircleProgressBar = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(
    #eee ${({ level }) => level}%,
    transparent ${({ level }) => level}%
  );
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProgressBarText = styled.span`
  font-size: 24px;
  color: #333;
`;

const Skills = () => {
  const skillsData = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React.js", level: 75 },
    { name: "Next.js", level: 70 },
  ];

  return (
    <StyledSection>
      <Title>Skills</Title>
      <ProgressBarWrapper>
        {skillsData.map((skill, index) => (
          <SkillBox key={index}>
            <SkillTitle>{skill.name}</SkillTitle>
            <CircleProgressBar level={(skill.level / 100) * 360}>
              <ProgressBarText>{skill.level}</ProgressBarText>
            </CircleProgressBar>
          </SkillBox>
        ))}
      </ProgressBarWrapper>
    </StyledSection>
  );
};

export default Skills;
