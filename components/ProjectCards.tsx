import { Project } from 'lib/types';
import Image from 'next/image';
import {
  ProjectCardsContainer,
  ProjectCard,
  ProjectCardImg,
  ProjectCardCopy,
  ProjectCardTitle,
  ProjectCardDesc,
} from './ProjectCards.style';

const ProjectCards = ({ projects }: { projects: Project[] }) => {
  return (
    <ProjectCardsContainer>
      {projects.map((project) => (
        <a href={project.url} key={project.title} target="_blank" rel="noreferrer">
          <ProjectCard>
            <ProjectCardImg>
              <Image
                src={project.image}
                alt={project.title}
                layout="fill"
                objectFit="cover"
              />
            </ProjectCardImg>
            <ProjectCardCopy>
              <ProjectCardTitle>{project.title}</ProjectCardTitle>
              <ProjectCardDesc>{project.description}</ProjectCardDesc>
            </ProjectCardCopy>
          </ProjectCard>
        </a>
      ))}
    </ProjectCardsContainer>
  );
};

export default ProjectCards;
