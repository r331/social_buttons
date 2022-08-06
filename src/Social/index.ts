import React from 'react';

export type TrevorComponent<P = {}, C = string> = React.FunctionComponent<
  P & {
    className?: string;
    dataTestId?: string;
    children?: C;
  }
>;
