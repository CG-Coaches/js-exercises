import {checkFalsy, returnTrueIfHasValue} from "./strict-null";

describe('StrictNull', () => {
  test.each`
  value    | expected
  ${''} | ${true}
  ${1234} | ${true}
  ${'testje'} | ${true}
  ${0} | ${true}
  ${true} | ${true}
  ${false} | ${true}
  ${undefined} | ${false}
  ${null} | ${true}
`('returnTrueIfHasValue($value) should return $expected', ({value, expected}) => {
  expect(returnTrueIfHasValue(value)).toBe(expected)
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
  expect(checkFalsy(value)).toBe(expected)
  });
})
