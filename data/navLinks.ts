import metadata from './metadata';

const navLinks: { title: string; path: string; link: string }[] = [
  // { title: '플레이그라운드', path: '/playground', link: '/playground' },
  { title: '블로그', path: '/', link: '/' },
  { title: '노트', path: '/note', link: '/note' },
  { title: 'GitHub', path: metadata.social.github, link: metadata.social.github },
];

export default navLinks;
