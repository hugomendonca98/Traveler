// Formatando texto para tirar acentos, espaços e caixa alta.
const textFormat = (text: string): string => {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

export default textFormat;
