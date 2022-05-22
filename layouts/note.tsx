import Container from 'components/Container';
import NoteAside from 'components/Note/NoteAside';
import MDXPost from 'components/Post/MDXPost';
import { Note } from 'contentlayer/generated';
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
          <MDXComponent />
        </MDXPost>
      </NoteContainer>
    </Container>
  );
};

export default NoteLayout;
