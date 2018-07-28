export const RandomFactory = (
  start: number,
  end: number,
  inclusivity: string = "[]"
): number => {
  switch (inclusivity) {
    case "[]":
      return Math.floor((end - start + 1) * Math.random() + start);
    case "()":
      return Math.floor((end - start) * Math.random() + start);
    case "(]":
      return Math.floor((end - start) * Math.random() + start);
    case "[)":
      return Math.floor((end - start) * Math.random() + start);
  }
  return Math.floor((end - start) * Math.random() + start);
};
