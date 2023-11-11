import NoteLayout from 'layouts/note';
import React from 'react';
import { getNotesTree } from 'src/service/notes';

/* TODO: SEO */

type Props = {
  params: { slug: string[] };
};

const Note = async ({ params: { slug } }: Props) => {
  const { note, tree } = await getNotesTree(slug);
  return <NoteLayout note={note} tree={tree} />;

  // return <section>notes!</section>;
};

export default Note;
