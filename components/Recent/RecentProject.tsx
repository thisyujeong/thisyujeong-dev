import { Project } from 'lib/types';
import Image from 'next/image';
import {
  RecentProjectContaner,
  ProjectCard,
  ProjectCardCopy,
  ProjectCardImg,
  ProjectCardTitle,
  ProjectCardDesc,
} from './RecentProject.style';
import RecentTitle from './RecentTitle';

const RecentProject = ({ projects }: { projects: Project[] }) => {
  return (
    <>
      <RecentTitle title="프로젝트" engTitle="project" path="/project" />
      <RecentProjectContaner>
        {projects.map((p) => (
          <a href={p.url} key={p.title} target="_blank" rel="noreferrer">
            <ProjectCard>
              <ProjectCardImg>
                <Image src={p.image} alt={p.title} layout="fill" objectFit="cover" />
              </ProjectCardImg>
              <ProjectCardCopy>
                <ProjectCardTitle>{p.title}</ProjectCardTitle>
                <ProjectCardDesc>{p.description}</ProjectCardDesc>
              </ProjectCardCopy>
            </ProjectCard>
          </a>
        ))}
      </RecentProjectContaner>
    </>
  );
};

export default RecentProject;
