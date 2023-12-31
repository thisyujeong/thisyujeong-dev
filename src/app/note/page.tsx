import React from 'react';
import { genNotesTree } from '@/service/notes';
import NoteList from 'components/Note/NoteList';
import NoteCategory from 'components/Note/NoteCategory';

const NotePage = async () => {
  const tree = await genNotesTree();

  return (
    <section>
      <NoteCategory tree={tree} />
      {tree.map((notes) => (
        <NoteList key={notes.title} notes={notes} />
      ))}
    </section>
  );
};

export default NotePage;
