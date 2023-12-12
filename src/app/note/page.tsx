import React from 'react';
import { genNotesTree } from '@/service/notes';
import NoteList from 'components/Note/NoteList';

const NotePage = async () => {
  const tree = await genNotesTree();

  return (
    <section>
      {tree.map((notes) => (
        <NoteList key={notes.title} notes={notes} />
      ))}
    </section>
  );
};

export default NotePage;
