export const uniqueID = () => {
  let randomizer = 999999999999;
  return Math.round(Math.random() * randomizer);
};
export const sleep = (ms) => {
  const currentTime = new Date().getTime();

  while (currentTime + ms >= new Date().getTime()) {
  }
};