import Container from 'components/Container';
import GiscusArea from 'components/GiscusArea';
import GoTop from 'components/GoTop';
import NoteAside from 'components/Note/NoteAside';
import MDXPost from 'components/Post/MDXPost';
import metadata from 'data/metadata';
import { NoteLayout } from 'lib/types';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { NextSeo } from 'next-seo';
import { NoteContainer } from './note.style';

const NoteLayout = ({ note, tree }: NoteLayout) => {
  const MDXComponent = useMDXComponent(note.body.code);
  return (
    <Container isAside={true}>
      <NextSeo
        title={`${note.title}`}
        description={'Code Snippets, Notes'}
        canonical={`${metadata.meta.url}/${note.url_path}`}
        openGraph={{
          type: 'article',
          url: `${metadata.meta.url}/${note.url_path}`,
          article: {
            publishedTime: new Date(note.date).toISOString(),
            tags: [...note.tags, 'frontend', 'develop'],
          },
        }}
      />
      <NoteContainer>
        <NoteAside tree={tree} />
        <MDXPost title={note.title} date={note.date}>
          {/* <BreadCrumb path={note.url_path} /> */}
          <MDXComponent />
          <GiscusArea slug={note.url_path}></GiscusArea>
        </MDXPost>
      </NoteContainer>
      <GoTop />
    </Container>
  );
};

export default NoteLayout;
