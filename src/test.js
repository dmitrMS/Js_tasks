import { functions } from "./functions.js";

test("numberSquares first test", () => {
  expect(functions.numberSquares(3)).toBe(14);
});

test("numberSquares second test", () => {
  expect(functions.numberSquares(10)).toBe(385);
});

test("seriesResistance first test", () => {
  expect(functions.seriesResistance([1, 5, 6, 3])).toBe("15 ohms");
});

test("seriesResistance second test", () => {
  expect(functions.seriesResistance([0.2, 0.3, 0.4])).toBe("0.9 ohm");
});

test("toBinary first test", () => {
  expect(functions.toBinary(0xff)).toBe("11111111");
});

test("toBinary second test", () => {
  expect(functions.toBinary(0xaa)).toBe("10101010");
});

test("numberSplit first test", () => {
  expect(functions.numberSplit(4)).toStrictEqual([2, 2]);
});

test("numberSplit second test", () => {
  expect(functions.numberSplit(10)).toStrictEqual([5, 5]);
});

test("rexesp first test", () => {
  expect(functions.rexesp("Breakfast at 09:00 in the room 123:456.")).toEqual(
    "09:00"
  );
});

test("rexesp second test", () => {
  expect(
    functions.rexesp("Breakfast at 13:54 in the room 123:456.")
  ).toStrictEqual("13:54");
});

test("timeForMilkAndCookies first test", () => {
  expect(functions.timeForMilkAndCookies(new Date(2013, 11, 24))).toEqual(true);
});

test("timeForMilkAndCookies second test", () => {
  expect(functions.timeForMilkAndCookies(new Date(2013, 11, 24))).toEqual(
    false
  );
});

test("largestSwap first test", () => {
  expect(functions.largestSwap(27)).toEqual(false);
});

test("largestSwap second test", () => {
  expect(functions.largestSwap(54)).toEqual(true);
});

// Test.assertEquals(timeForMilkAndCookies(new Date(2013, 11, 24)), true);
// Test.assertEquals(timeForMilkAndCookies(new Date(2154, 11, 11)), false);
// Test.assertEquals(largestSwap(27), false, "27 < 72, so not largest swap.");
// Test.assertEquals(largestSwap(43), true, "43 > 34, so largest swap.");
// Test.assertEquals(numberSquares(3), 14)
// Test.assertEquals(numberSquares(10), 385)
// Test.assertSimilar(numberSplit(4), [2, 2])
// Test.assertSimilar(numberSplit(10), [5, 5])
// Test.assertEquals(toBinary(0xFF), "11111111")
// Test.assertEquals(toBinary(0xAA), "10101010")
// Test.assertEquals(seriesResistance([1, 5, 6, 3]), "15 ohms")
// Test.assertEquals(seriesResistance([0.2, 0.3, 0.4]), "0.9 ohm")
