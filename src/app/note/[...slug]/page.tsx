import { getNotesTree } from 'src/service/notes';
import NoteContent from 'components/Note/NoteContent';
import metadata from 'data/metadata';

type Props = {
  params: { slug: string[] };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const { note } = await getNotesTree(slug);

  return {
    title: note.title,
    description: note.title,
    keywords: [...note.tags, ...metadata.meta.keywords],
    openGraph: {
      ...metadata.meta.openGraph,
      title: note.title,
      description: note.title,
      url: `${metadata.meta.url}/note/${slug.join('/')}`,
    },
  };
}

const NoteDetailPage = async ({ params: { slug } }: Props) => {
  const { note } = await getNotesTree(slug);
  return <NoteContent note={note} />;
};

export default NoteDetailPage;
