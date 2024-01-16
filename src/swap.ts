exports.swap = (first: number, second: number): number[] => {
   [second, first] = [first, second];
   return [first, second];
};
