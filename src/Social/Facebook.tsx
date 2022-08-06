import React from 'react';
import generateLinkFor from './generateLinkFor';

// URL → u
// custom image → picture
// custom title → title
// custom quote → quote
// custom description → description
// caption (aka website name) → caption

export type FacebookProps = {
  title: string;
  url: string;
  description?: string;
  picture?: string;
};

const Facebook: React.FC<FacebookProps> = ({
  title,
  url,
  description,
  picture,
}) => {
  const link = generateLinkFor('https://www.facebook.com/sharer/sharer.php', {
    u: url,
    title,
    description,
    picture,
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
      src="/img/facebook.svg"
      className="socialButton"
    />
  );
};

export default Facebook;
