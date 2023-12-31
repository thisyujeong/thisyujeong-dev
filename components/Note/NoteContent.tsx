import { Note } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXPost from 'components/Post/MDXPost';

type Props = {
  note: Note;
};

const NoteContent = ({ note }: Props) => {
  const MDXComponent = useMDXComponent(note.body.code);

  return (
    <>
      <MDXPost title={note.title} date={note.date}>
        <MDXComponent />
      </MDXPost>
      {/* <GiscusArea slug={note.url_path}></GiscusArea> */}
    </>
  );
};

export default NoteContent;
