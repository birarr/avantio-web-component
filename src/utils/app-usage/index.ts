export const getRandomBoolean = (probabilityTrue = 0.5) => {
  return Math.random() < probabilityTrue;
};
