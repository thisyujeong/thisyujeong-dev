import ProjectCards from 'components/Project/ProjectCards';
import Title from 'components/Title';
import metadata from 'data/metadata';
import * as allProjects from 'data/projects';
import { InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Container from '../components/Container';

const project = ({ projects }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Container>
      <NextSeo
        title="Projects | thisyujeong"
        description="사이드 & 토이 프로젝트를 기록합니다."
        canonical={`${metadata.meta.url}/blog`}
        openGraph={{ url: `${metadata.meta.url}/blog` }}
      />

      <Title title="project" description="사이드 & 토이 프로젝트를 기록합니다." />
      <ProjectCards projects={projects} />
    </Container>
  );
};

export const getStaticProps = () => {
  const projects = [...allProjects.default];
  return {
    props: {
      projects: projects,
    },
  };
};

export default project;
