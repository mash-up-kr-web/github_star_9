export const delay = (ms: number) => {
  return new Promise((resolve: () => void) => setTimeout(() => resolve(), ms));
};
