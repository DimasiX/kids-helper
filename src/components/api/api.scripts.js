export const uniqueID = () => {
  let randomizer = 999999999999;
  return Math.round(Math.random() * randomizer);
};
