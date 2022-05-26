import metadata from 'data/metadata';
import Image from 'next/image';
import { FooterContainer, SocialContainer, Copyright, BlogInfo } from './Footer.style';

const Footer = () => {
  return (
    <FooterContainer>
      <SocialContainer>
        {metadata.social.github && (
          <a href={metadata.social.github} target="_blank" rel="noreferrer">
            <Image width={16} height={16} src="/social/github.svg" alt="github" />
          </a>
        )}
        {metadata.social.rss && (
          <a href={metadata.social.rss} target="_blank" rel="noreferrer">
            <Image width={16} height={16} src="/social/rss.svg" alt="github" />
          </a>
        )}
      </SocialContainer>
      <Copyright>
        Copyright © {new Date().getFullYear()} {metadata.author}
      </Copyright>
      <BlogInfo href={metadata.repo} rel="noreferrer">
        thisyujeong.dev
      </BlogInfo>
    </FooterContainer>
  );
};

export default Footer;
