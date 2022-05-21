import ProjectCards from 'components/ProjectCards';
import Title from 'components/Title';
import metadata from 'data/metadata';
import projects from 'data/projects';
import { NextSeo } from 'next-seo';
import Container from '../components/Container';

const project = () => {
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

export default project;
