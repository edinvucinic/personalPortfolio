import React from "react";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  const imageUrls = [
    "https://mybank-website.vercel.app/?#",
    "https://my-bank-balance-tracker.vercel.app/",
    "https://github.com/edinvucinic/fun_facts_app",
    "https://github.com/edinvucinic/flinstagram_social_media_app",
  ];

  const githubRepos = [
    "https://github.com/edinvucinic/fun_facts_app",
    "https://github.com/edinvucinic/appointments01",
    "https://github.com/edinvucinic/Personal_Portfolio_not_finished",
    "https://github.com/edinvucinic/Flask_Market1",
  ];

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <a href={imageUrls[i]} target="_blank" rel="noopener noreferrer">
                <Img src={p.image} />
              </a>
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={githubRepos[i]}>Code</ExternalLinks>
                <ExternalLinks href={imageUrls[i]}>Go Live</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
