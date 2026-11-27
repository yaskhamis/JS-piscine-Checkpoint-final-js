function flattenObject(obj, prefix = "") {
  const result = {};
  for (const key in obj) {
    const path = prefix + key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(result, flattenObject(obj[key], path + "."));
    } else {
      result[path] = obj[key];
    }
  }
  return result;
}

const obj = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  f: [4, 5, { g: 6 }],
};

const flattened = flattenObject(obj);
console.log(flattened);