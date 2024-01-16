const { swap } = require("../src/swap");

describe("Swap function.", () => {
   test("Should swap the values.", () => {
	   expect(swap(12, 15)).toEqual([15, 12]);
   });
});
