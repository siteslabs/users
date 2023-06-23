export const areArraysEqual = (arr1: string[], arr2: string[]) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let isEqual = true;

  arr1.forEach((str) => {
    if (!arr2.includes(str)) {
      isEqual = false;
    }
  });

  return isEqual;
};
