import { TreeNode } from 'lib/types';
import { NoteAsideContainer } from './NoteAside.style';

const NoteAside = ({ tree }: { tree: TreeNode[] }) => {
  if (tree) console.log('NoteAside tree ->', tree);
  return (
    <>
      <NoteAsideContainer></NoteAsideContainer>
    </>
  );
};

export default NoteAside;
