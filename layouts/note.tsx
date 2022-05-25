import Container from 'components/Container';
import NoteAside from 'components/Note/NoteAside';
import MDXPost from 'components/Post/MDXPost';
import { NoteLayout } from 'lib/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import { NoteContainer } from './note.style';

const NoteLayout = ({ note, tree }: NoteLayout) => {
  const MDXComponent = useMDXComponent(note.body.code);
  return (
    <Container>
      <NextSeo />
      <NoteContainer>
        <NoteAside tree={tree} />
        <MDXPost title={note.title} date={note.date}>
          {/* <BreadCrumb path={note.url_path} /> */}
          <MDXComponent />
        </MDXPost>
      </NoteContainer>
    </Container>
  );
};

export default NoteLayout;
