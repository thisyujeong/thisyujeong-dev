import { getNotesTree } from 'src/service/notes';
import NoteContent from 'components/Note/NoteContent';

/* TODO: SEO */

type Props = {
  params: { slug: string[] };
};

const Note = async ({ params: { slug } }: Props) => {
  const { note } = await getNotesTree(slug);
  {
    /* <NextSeo
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
      /> */
  }
  return <NoteContent note={note} />;
};

export default Note;
