import styled from '@emotion/styled';

export const MDXPostContainer = styled.div`
  position: relative;
  width: 100%;
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;

  * {
    color: var(--text-base);
    font-size: 17px;
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
    margin: 28px 0 0;
    line-height: 1.57em;
  }

  h2 {
    font-size: 26px;
    font-weight: 500;
    margin: 24px 0 0;
    line-height: 1.57em;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin: 28px 0 0;
    line-height: 1.57em;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    margin: 28px 0 0;
    line-height: 1.57em;
  }

  h5 {
    font-size: 17px;
    font-weight: 500;
    margin: 28px 0 0;
    line-height: 1.57em;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    margin: 28px 0 0;
    line-height: 1.57em;
  }

  strong {
    font-weight: 500;
  }

  p {
    margin: 0.85em 0;
    code {
      color: #109a79;
      padding: 0.25rem 0.5rem;
      font-size: 1em;
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
    margin: 0.85em 0;
    overflow-x: auto;

    * {
      line-height: 1.57em;
    }

    > code {
      width: 100%;
      display: block;
      font-size: 16px;
      line-height: 1.57em;
      * {
        font-size: 16px;
        line-height: 1.57em;
      }
    }
  }

  blockquote {
    margin: 0.5rem 0;
    padding: 0.2rem 1rem;
    position: relative;
    border-left: 4px solid var(--mdx-border);

    & p {
      font-size: 16px;
      display: inline;
      color: #8a929b;

      * {
        font-size: 16px;
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
    > li {
      list-style: decimal;
      p {
        margin: 0.5em 0;
      }
      > ol {
        margin: 0.5em 0;
        li {
          list-style: lower-alpha;

          > ol {
            > li {
              list-style: lower-roman;
            }
          }
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
    .hljs-function,
    .hljs-selector-class {
      color: #4964d6;
    }

    .hljs-string {
      color: #7dab95;
    }

    .hljs-comment {
      color: #c2b1a3;
    }
    .hljs-name,
    .hljs-keyword,
    .hljs-selector-tag {
      color: #ff6161;
    }

    &.language-csharp {
      * {
        color: var(--text-base);
      }
    }
  }

  .rehype-code-title {
    color: #aa865e;
    font-size: 14px;
    margin-bottom: -15px;
    margin-left: 4px;
    opacity: 0.8;
    &:before {
      content: '✦';
      margin-right: 6px;
    }
  }
`;

export const MDXPostSection = styled.section``;

export const MDXPostHead = styled.div`
  position: relative;
`;

export const ClipboardCopyBtn = styled.button`
  margin-top: 10px;
  position: relative;
  display: block;
  height: 38px;
  width: 38px;
  border-radius: 20%;
  background: var(--mdx-icon-bg);
  transition: all 0.1s ease;

  svg {
    fill: var(--mdx-icon-color);
    width: 20px;
    height: 38px;
    transition: all 0.2s ease;
  }

  &:after {
    content: 'copy';
    position: absolute;
    top: 50%;
    left: calc(100% + 10px);
    padding: 4px 8px 6px;
    color: var(--bg);
    font-size: 14px;
    line-height: 1;
    border-radius: 4px;
    background: var(--text-base);
    transform: translateY(-50%);
    pointer-events: none;
    opacity: 0;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    width: 0;
    height: 0;
    border-bottom: 4px solid transparent;
    border-top: 4px solid transparent;
    border-left: 4px solid transparent;
    border-right: 6px solid var(--text-base);
    transform: translateY(-50%);
    pointer-events: none;
    opacity: 0;
    z-index: 10;
  }

  &:hover {
    svg {
      fill: var(--text-base);
    }

    &:before,
    &:after {
      opacity: 1;
    }
  }

  &:active {
    svg {
      transform: scale(0.9);
      fill: var(--accent);
    }
  }
`;

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
