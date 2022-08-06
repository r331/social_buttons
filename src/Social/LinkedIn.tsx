import React from 'react';
import generateLinkFor from './generateLinkFor';

export type LinkedinProps = {
  title: string;
  url: string;
};

const Linkedin: React.FC<LinkedinProps> = ({ title, url }) => {
  const link = generateLinkFor('https://linkedin.com/shareArticle', {
    mini: 'true',
    url,
    title,
  });

  return (
    <img
      onClick={() =>
        window.open(
          link,
          '_blank',
          'location=yes,height=570,width=520,scrollbars=yes,status=yes',
        )
      }
      src="/img/linkedin.svg"
      className="socialButton"
    />
  );
};

export default Linkedin;
