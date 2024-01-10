// jest - test

const { sum, sub, times, div } = require("./CalculationsUseCase")

test("adds 2 + 2 to equal 4", () => {
  expect(sum(2, 2)).toBe(4)
})

test("sub 2 - 2 to equal 0", () => {
  expect(sub(2, 2)).toBe(0)
})

test("times 2 * 2 to equal 4", () => {
  expect(times(2, 2)).toBe(4)
})

test("div 2 / 2 to equal 1", () => {
  expect(div(2, 2)).toBe(1)
})
