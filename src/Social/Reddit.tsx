import React from 'react';
import generateLinkFor from './generateLinkFor';
//

export type RedditProps = {
  title: string;
  url: string;
};

const Reddit: React.FC<RedditProps> = ({ title, url }) => {
  const link = generateLinkFor('https://reddit.com/submit', {
    url,
    kind: 'link',
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
      src="/img/reddit.svg"
      className="socialButton"
    />
  );
};

export default Reddit;
