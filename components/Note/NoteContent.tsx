import { Note } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import MDXPost from 'components/Post/MDXPost';
import styles from './NoteContent.module.scss';

/* TODO: NextSEO */
type Props = {
  note: Note;
};

const NoteContent = ({ note }: Props) => {
  const MDXComponent = useMDXComponent(note.body.code);

  return (
    <div className={styles.note_content}>
      <MDXPost title={note.title} date={note.date}>
        <MDXComponent />
      </MDXPost>
      {/* <GiscusArea slug={note.url_path}></GiscusArea> */}
    </div>
  );
};

export default NoteContent;
