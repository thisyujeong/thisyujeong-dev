import styled from '@emotion/styled';

export const MDXPostContainer = styled.div`
  position: relative;
  width: 100%;
  font-size: 16px;
  line-height: 1.8;
  font-weight: 400;

  * {
    color: #2c3e50;
  }

  a {
    color: #2a75e9;
    transition: color 0.2s ease;
    &:hover {
      color: #289aff;
      text-decoration: underline;
    }
  }

  h1 {
    font-size: 28px;
    font-weight: 500;
    margin: 30px 0 0;
  }

  h2 {
    font-size: 26px;
    font-weight: 500;
    margin: 30px 0 0;
  }

  h3 {
    font-size: 22px;
    font-weight: 500;
    margin: 30px 0 0;
  }

  h4 {
    font-size: 18px;
    font-weight: 500;
    margin: 30px 0 0;
  }

  h5 {
    font-size: 17px;
    font-weight: 500;
    margin: 30px 0 0;
  }

  h6 {
    font-size: 16px;
    font-weight: 500;
    margin: 30px 0 0;
  }

  strong {
    font-weight: 600;
  }

  p {
    margin: 0.7em 0;
    code {
      color: #476582;
      padding: 0.25rem 0.5rem;
      margin: 0;
      font-size: 0.85em;
      background-color: rgba(27, 31, 35, 0.05);
      border-radius: 3px;
    }
  }

  pre {
    padding: 10px 16px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 5px;
    background-color: rgba(27, 31, 35, 0.05);
    overflow-x: auto;
  }

  blockquote {
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
    position: relative;
    border-left: 4px solid #dfe2e5;

    & p {
      display: inline;
      color: #8a929b;
    }
  }

  ul {
    margin: 0;
    padding-left: 20px;
    margin: 1rem 0;
    li {
      list-style: disc;
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
    border-bottom: 2px solid #dfe2e5;
  }

  td {
    padding: 0.5rem 1.2rem;
    border: 1px solid #dfe2e5;
  }

  th {
    padding: 0.5rem 1.2rem;
    font-weight: 500;
    border: 1px solid #dfe2e5;
  }

  sup a {
    font-size: 12px;
  }

  img {
    max-width: 100%;
  }
`;

export const MDXPostTitle = styled.h1`
  font-size: 30px !important;
  margin-top: 0 !important;
  word-break: keep-all;
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
