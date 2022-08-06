import React from 'react';
import styled from 'styled-components';
import Twitter from './Twitter';
import Facebook from './Facebook';
import Reddit from './Reddit';
import LinkedIn from './LinkedIn';
import CopyUrlButton from './CopyUrlButton';

export type SocialProps = {
  title: string;
  url: string;
};

const Social: React.FC<SocialProps> = ({ title, url }) => {
  return (
    <SocialWrapper>
      <Twitter title={title} url={url} />
      <Reddit title={title} url={url} />
      <Facebook title={title} url={url} />
      <LinkedIn title={title} url={url} />
      <CopyUrlButton url={url} />
    </SocialWrapper>
  );
};

export const SocialWrapper = styled.div`
  display: inline-flex;
  gap: 4px;
  .socialButton {
    cursor: pointer;
    width: 31px;
    height: 31px;
    margin-right: 0px;
  }
`;

export default Social;
