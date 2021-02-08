export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomIndex = (array) => array[getRandomInteger(0, array.length - 1)];

export const getRandomTransition = () => {
  const R1 = ((Math.random() * 0.699) + 0.300).toFixed(3);
  const R2 = ((Math.random() * -0.899) - 0.100).toFixed(3);
  const R3 = ((Math.random() * 0.899) + 0.100).toFixed(3);
  const R4 = (Math.random() + 0.4).toFixed(3);
  return `cubic-bezier(${R1},${R2},${R3},${R4})`;
};

export const getRandomColor = () => `#${((1 << 24) * Math.random() | 0).toString(16)}`;

export const generateCubeParams = () => {
  const randomDimension = getRandomInteger(50, 150);
  return {
    top: `${getRandomInteger(0, 75)}%`,
    left: `${getRandomInteger(0, 75)}%`,
    width: `${randomDimension}px`,
    height: `${randomDimension}px`,
    borderRadius: `${getRandomInteger(0, 15)}px`,
    color: `${getRandomColor()}`,
    zIndex: `${getRandomInteger(1, 10)}`,
    transition: `all ${randomDimension / 100}s ${getRandomTransition()}`
  };
};

export const generateId = () => Math.random().toString(36).substr(2, 9);

