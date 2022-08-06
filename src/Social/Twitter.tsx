import React from 'react';
import generateLinkFor from './generateLinkFor';

//
export type TwitterProps = {
  title: string;
  url: string;
};

const Twitter: React.FC<TwitterProps> = ({ title, url }) => {
  const link = generateLinkFor('https://twitter.com/share', {
    url,
    text: title,
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
      src="/img/twitter.svg"
      className="socialButton"
    />
  );
};

export default Twitter;
