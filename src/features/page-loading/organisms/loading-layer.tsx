import * as React from 'react';
import { useStore } from 'effector-react';

import { $loadingInProgress } from '../model';
import { PageSpinner } from '../molecules';

export const LoadingLayer: React.FC = (): JSX.Element | null => {
  const isLoading = useStore($loadingInProgress);

  return isLoading ? <PageSpinner /> : null;
};
