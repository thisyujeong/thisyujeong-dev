import { writeFileSync } from 'fs';
import RSS from 'rss';

import { allBlogs } from '../.contentlayer/generated/allBlogs.mjs';
import { allNotes } from '../.contentlayer/generated/allNotes.mjs';

async function generate() {
  const feed = new RSS({
    title: 'Thisyujeong',
    site_url: 'https://thisyujeong.dev',
    feed_url: 'https://thisyujeong.dev/feed.xml',
  });

  allBlogs.map((post) => {
    feed.item({
      title: post.title,
      url: `https://thisyujeong.dev/blog/${post.slug}`,
      date: post.date,
      description: post.description,
    });
  });

  allNotes.map((note) => {
    feed.item({
      title: note.title,
      url: `https://thisyujeong.dev/${note.url_path}`,
      date: note.date,
    });
  });

  writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
