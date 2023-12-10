import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components"; // Import styled-components

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

// Define a styled component for the modified text size
const CustomSectionTitle = styled(SectionTitle)`
  font-size: 190%; /* 40% smaller font size */
`;

const Timeline = () => {
  // ... (rest of your existing code remains the same)

  return (
    <Section id="about">
      {/* Apply the modified text component */}
      <CustomSectionTitle>About Me</CustomSectionTitle>
      <SectionText>
        Hi there again! So, when I am not tinkering with the latest JavaScript
        update or creating and testing Next.js/React.js apps, you can find me
        spending time with my family, reading books or untangling my cats from
        computer cords.
      </SectionText>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;
