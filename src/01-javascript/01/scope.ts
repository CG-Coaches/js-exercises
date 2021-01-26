/**
 * In JS, each local scope can see all the local scopes that contain it.
 * All scopes can see the global scope (containing for example, the console object).
 * This approach is called lexical scoping...
 */
export function lexicalScoping(a: number): void {
  function multiplyWith(b: number): void {
    console.log(a * b);
  }
  multiplyWith(1);
  multiplyWith(2);
  multiplyWith(3);
}
