const linkFormat = (text: string): string => {
  return text.normalize('NFD').replace(/[^a-zA-Zs]/g, '');
};

export default linkFormat;
