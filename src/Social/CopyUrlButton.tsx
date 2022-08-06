import React, { useState } from 'react';
// @ts-ignore
import {TransitionGroup, CSSTransition, Transition} from 'react-transition-group';

import styled from 'styled-components';
import './Styles.module.css';
import { TrevorComponent } from './index';
import CopiedNotification from './CopiedNotification';

export type ChainProps = {
  url: string;
};

const CopyUrlButton: TrevorComponent<ChainProps> = ({ url, className }) => {
  //const [isNotificationShown, showNotification] = useTimeoutToggle(2500);
  const [isNotificationShown, showNotification] = useState(true);
  const copy = () => {
    showNotification(isNotificationShown ? false : true);
    window.navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div>
      <div className={className}>
        <input type="text" value={url} readOnly />
        <img onClick={copy} src="/img/share_chain.svg" />
      </div>
        <CSSTransition key={1} timeout={500} classNames="post">
          <CopiedNotification visible={isNotificationShown} />
        </CSSTransition>
    </div>
  );
};

export default CopyUrlButton;
