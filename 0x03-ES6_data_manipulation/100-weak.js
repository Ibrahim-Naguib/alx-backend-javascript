let count = 0;
export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  count += 1;
  if (count >= 5) throw new Error('Endpoint load is high');
  weakMap.set(endpoint, count);
}
