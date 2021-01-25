import {checkIsFalsy, checkIsEmpty} from "./falsy";

describe('falsy', () => {
  test.each`
  value    | expected
  ${''} | ${false}
  ${1234} | ${false}
  ${'testje'} | ${false}
  ${0} | ${false}
  ${true} | ${false}
  ${false} | ${false}
  ${undefined} | ${true}
  ${null} | ${false}
`('checkIfEmpty($value) should return $expected', ({value, expected}) => {
  expect(checkIsEmpty(value)).toBe(expected)
  });

  test.each`
  value    | expected
  ${''} | ${true}
  ${1234} | ${false}
  ${'testje'} | ${false}
  ${0} | ${true}
  ${true} | ${false}
  ${false} | ${true}
  ${undefined} | ${true}
  ${null} | ${true}
`('checkFalsy($value) should return $expected', ({value, expected}) => {
  expect(checkIsFalsy(value)).toBe(expected)
  });
})
