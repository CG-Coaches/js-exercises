/**
 * TOPIC: falsy and truthy values, beware of the pitfalls...
 */

/**
 * Return true if the value is empty.
 */
export function isEmpty(value: any): boolean {
  return value === undefined;
}

/**
 * Return true if the given value is falsy.
 */
export function isFalsy(value: any){
  return ! value;
}
