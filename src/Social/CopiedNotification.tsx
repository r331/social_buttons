import React from 'react';
import { TrevorComponent } from './index';
import cl from './CopiedStyles.module.css';

export type CopiedProps = {
  visible: boolean;
};

const CopiedNotification: TrevorComponent<CopiedProps> = ({ visible }) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active);
  }

  return <div className={rootClasses.join(' ')}>Link copied to clipboard</div>;
};

export default CopiedNotification;
