import { KeyboardEvent } from 'react';

export const delay = (ms: number) => {
  return new Promise((resolve: () => void) => setTimeout(() => resolve(), ms));
};

export const isEnterKeyPressed = (event: KeyboardEvent<HTMLInputElement>) => {
  return event.key === 'ENTER' || event.keyCode === 13;
};
