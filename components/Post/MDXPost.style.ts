import styled from '@emotion/styled';

export const MDXPostContainer = styled.div`
  position: relative;
  width: 100%;
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;

  * {
    color: var(--text-base);
    font-size: 15px;
    line-height: 2em;
  }

  a {
    color: var(--accent);
    transition: color 0.2s ease;
    &:hover {
      color: var(--accent);
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: 500;
    margin: 20px 0 0;
    line-height: 1.57em;
  }

  h2 {
    font-size: 26px;
    font-weight: 500;
    margin: 20px 0 0;
    line-height: 1.57em;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin: 20px 0 0;
    line-height: 1.57em;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    margin: 20px 0 0;
    line-height: 1.57em;
  }

  h5 {
    font-size: 17px;
    font-weight: 500;
    margin: 20px 0 0;
    line-height: 1.57em;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    margin: 20px 0 0;
    line-height: 1.57em;
  }

  strong {
    font-weight: 500;
  }

  p {
    margin: 1em 0;
    code {
      color: #109a79;
      padding: 0.25rem 0.5rem;
      font-size: 0.85em;
      margin: 0 2px;
      background-color: var(--code-block);
      border-radius: 3px;
    }
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #d0d7de;
  }

  pre {
    position: relative;
    font-size: 15px;
    font-weight: 500;
    padding: 9px 16px;
    border-radius: 5px;
    background-color: var(--code-block);
    overflow-x: auto;

    * {
      line-height: 1.57em;
    }

    > code {
      width: 100%;
      display: block;
    }
  }

  blockquote {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    position: relative;
    border-left: 4px solid var(--mdx-border);

    & p {
      display: inline;
      color: #8a929b;

      * {
        color: var(--text-base-70);
      }
    }
  }

  ul {
    margin: 0;
    padding-left: 20px;
    margin: 1rem 0;
    > li {
      list-style: disc;
      > ul {
        margin: 0;
        li {
          list-style: circle;
        }
      }
    }
  }

  ol {
    margin: 0;
    padding-left: 20px;
    margin: 1rem 0;
    li {
      list-style: decimal;
    }
  }

  table {
    margin: 1em 0;
    border-collapse: collapse;
    width: auto;
  }

  thead th {
    border-bottom: 2px solid var(--mdx-border);
  }

  td {
    padding: 0.5rem 1.2rem;
    border: 1px solid var(--mdx-border);
  }

  th {
    padding: 0.5rem 1.2rem;
    font-weight: 500;
    border: 1px solid var(--mdx-border);
  }

  sup a {
    font-size: 12px;
  }

  img {
    max-width: 100%;
  }

  /* mdx code block styles */
  pre > code[class*='language-'] {
    .hljs-title {
      &.class_,
      &.function_ {
        color: #109a79;
      }
    }

    .hljs-variable {
      &.constant_ {
        color: #3c8f99;
      }
    }

    .hljs-built_in,
    .hljs-function {
      color: #4964d6;
    }

    .hljs-keyword {
      color: #ff6161;
    }

    .hljs-string {
      color: #7dab95;
    }

    .hljs-comment {
      color: #c2b1a3;
    }
    .hljs-name,
    .hljs-selector-tag {
      color: #ff6161;
    }
  }

  .rehype-code-title {
    color: #e8b882;
    font-size: 14px;
    margin-bottom: -15px;
    margin-left: 4px;
    opacity: 0.8;
    font-style: italic;
    &:before {
      content: '🗂';
      margin-right: 6px;
    }
  }
`;

export const MDXPostSection = styled.section``;

export const MDXPostTitle = styled.h1`
  font-size: 30px !important;
  margin-top: 0 !important;
  word-break: keep-all;
`;

export const MDXPostURL = styled.div`
  font-size: 14px;
  color: var(--text-base);

  span {
    display: inline-block;
    opacity: 0.5;
    margin-right: 8px;
  }

  a {
    color: var(--text-base);

    opacity: 0.5;
    &:hover {
      color: var(--text-base);
      opacity: 1;
    }
  }
`;

export const MDXPostDate = styled.span`
  margin-bottom: 20px;
  font-size: 14px;
  word-break: keep-all;
  opacity: 0.5;
`;

export const MDXPostContent = styled.div`
  margin-top: 36px;
`;
