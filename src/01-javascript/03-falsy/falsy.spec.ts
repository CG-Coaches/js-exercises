import { isFalsy, isEmpty } from "./falsy";

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
`('isEmpty($value) should return $expected', ({value, expected}) => {
  expect(isEmpty(value)).toBe(expected)
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
`('isFalsy($value) should return $expected', ({value, expected}) => {
  expect(isFalsy(value)).toBe(expected)
  });
})
