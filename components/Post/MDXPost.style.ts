import styled from '@emotion/styled';
import mq from 'styles/utils/mq';

export const MDXPostContainer = styled.div`
  position: relative;
  width: 100%;
  font-size: 16px;
  line-height: 1.75;
  font-weight: 400;

  ${mq({
    maxWidth: ['100%', '100%', '100%'],
  })}

  * {
    color: var(--text-base);
    font-size: 17px;
    line-height: 2;

    &::selection {
      background-color: #98b48d63;
    }
  }

  sub,
  sup {
    font-size: 12px;
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
    margin: 32px 0 0;
    line-height: 1.57em;
  }

  h2 {
    font-size: 26px;
    font-weight: 500;
    margin: 32px 0 8px;
    line-height: 1.57em;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin: 20px 0 8px;
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
    font-weight: 600;
  }

  code {
    font-family: 'FiraMono';
  }

  p {
    margin: 1rem 0;
    code {
      color: #109a79;
      color: var(--text-base-90);
      padding: 3px 6px;
      font-size: 14px;
      margin: 0 2px;
      font-weight: 400;
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
    padding: 12px 14px;
    border-radius: 8px;
    background-color: var(--code-block);
    margin: 0.85em 0;

    * {
      line-height: 1.57em;
    }

    > code {
      width: 100%;
      display: block;
      line-height: 1.5em;
      overflow-x: auto;
      font-family: 'FiraMono';
      font-weight: 400;
      font-size: 14px;

      * {
        font-size: 14px;
        line-height: 1.25em;
      }
    }
  }

  blockquote {
    margin: 0.25rem 0;
    padding: 0 1rem;
    position: relative;
    border-left: 3px solid var(--text-base-40);
    & p {
      font-size: 16px;
      display: inline;
      color: var(--text-base-70);
      line-height: 1;

      * {
        font-size: 16px;
        color: var(--text-base-70);
      }

      a {
        color: var(--accent);
        opacity: 0.6;
      }

      strong {
        font-weight: 600;
      }

      em {
        font-style: italic;
      }
    }

    code {
      color: var(--text-base-90);
      font-weight: 400;
      padding: 0.2rem 0.3rem;
      font-size: 14px;
      margin: 0 2px;
      background-color: var(--code-block);
      border-radius: 3px;
    }
  }

  ul {
    margin: 1rem 0;
    padding-left: 24px;

    ul,
    ol {
      margin: 0;
    }
    > li {
      list-style: disc;

      > ul > li {
        list-style: circle;

        > ul > li {
          list-style: square;
        }
      }
    }
  }

  ol {
    padding-left: 24px;
    margin: 1rem 0;

    ul,
    ol {
      margin: 0;
    }

    > li {
      list-style: decimal;
      > ol > li {
        list-style: lower-alpha;
        > ol > li {
          list-style: lower-roman;
        }
      }
    }
  }

  li {
    code {
      margin: 0 2px;
      padding: 0.2rem 0.3rem;
      font-size: 14px;
      font-weight: 400;
      font-family: 'FiraMono';
      color: var(--text-base-90);
      border-radius: 3px;
      background-color: var(--code-block);
    }
  }

  table {
    margin: 1em 0;
    border-collapse: collapse;
    width: auto;
  }

  thead th {
    background: #c2e7c64d;
  }

  td {
    font-size: 14px;
    padding: 2px 15px;
    border: 1px solid var(--mdx-border);
  }

  th {
    font-size: 14px;
    padding: 2px 15px;
    font-weight: 500;
    border: 1px solid var(--mdx-border);
  }

  sup a {
    font-size: 12px;
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0.5rem 0;
  }

  /* mdx code block styles */
  pre > code[class*='language-'] {
    position: relative;
    .hljs-title {
      &.class_,
      &.function_ {
        color: #109a79;
      }
    }
    .hljs-number {
      color: orange;
    }
    .hljs-doctag {
      color: #449bb4;
    }

    .hljs-type {
      color: var(--text-base-70);
    }

    .hljs-variable {
      &.language_ {
        color: #109a79;
      }
      color: var(--text-base-70);
      &.constant_ {
        color: #3c8f99;
      }
    }

    .hljs-built_in,
    .hljs-function,
    .hljs-selector-class {
      color: #e06c75;
    }

    .hljs-string {
      color: #e1954d;
      color: #e7aa70;
    }

    .hljs-comment {
      color: var(--text-base-70);
      font-weight: 500;
    }
    .hljs-name,
    .hljs-keyword,
    .hljs-selector-tag {
      color: #e06c75;
    }

    &.language-csharp {
      * {
        color: var(--text-base);
      }
    }
  }

  .rehype-code-title {
    display: block;
    padding: 2px 12px;
    margin-top: 4px;
    font-size: 14px;
    font-weight: 500;
    color: var(--text-base-90);
    font-family: 'FiraMono';
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: var(--code-block);

    & + pre {
      margin-top: 2px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
`;

export const MDXPostSection = styled.section``;

export const MDXPostHead = styled.div`
  position: relative;
`;

export const ClipboardCopyBtn = styled.button`
  position: relative;
  display: block;
  height: 38px;
  width: 38px;
  margin: 20px auto;
  border-radius: 20%;
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
    background: var(--mdx-icon-bg);
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
  text-align: center;
`;

export const MDXPostURL = styled.div`
  margin-bottom: 14px;
  text-align: center;
  line-height: 2em;
  color: var(--text-base);
  a {
    font-size: 14px;
    &:hover {
      opacity: 1;
    }
  }
`;

export const MDXPostDate = styled.div`
  margin-bottom: 14px;
  font-size: 14px;
  text-align: center;
  word-break: keep-all;
  opacity: 0.5;
`;

export const MDXPostContent = styled.div`
  margin-top: 36px;
`;
