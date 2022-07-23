const iframeStreetLink = (street: string): string => {
  return street.replace(' ', '%20');
};

export default iframeStreetLink;
