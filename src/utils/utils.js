export const getOffersByCity = (offers, city) => {
  return offers.filter((it) => it.city === city);
};
