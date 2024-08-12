const weakMap = new WeakMap();
const MAX_ENDPOINT_CALLS = 5;

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const previousValue = weakMap.get(endpoint);
    weakMap.set(endpoint, previousValue + 1);
    if (weakMap.get(endpoint) >= MAX_ENDPOINT_CALLS) {
      throw new Error('Endpoint load is high');
    }
  } else weakMap.set(endpoint, 1);
}

export { weakMap, queryAPI };
