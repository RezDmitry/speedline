import React from 'react';

export interface IModalType {
  toggleOpened: () => void,
  content: React.ReactNode,
  isOpened: boolean,
}
