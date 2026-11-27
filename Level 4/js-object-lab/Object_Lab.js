function mergeAndTransform(objects, transforms) {
  const merged = { ...objects[0] };
  let keysAdded = 0;
  let keysOverwritten = 0;

  for (const obj of objects.slice(1)) {
    for (const key in obj) {
      key in merged ? keysOverwritten++ : keysAdded++;
      merged[key] = obj[key];
    }
  }

  return {
    finalObject: transforms.reduce((current, fn) => fn(current), merged),
    transformationsCount: transforms.length,
    keysAdded,
    keysOverwritten,
  };
}

const objArray = [{ a: 1, b: 2 }, { b: 3, c: 4 }, { d: 5 }];

const transforms = [
  (obj) => ({ ...obj, a: obj.a * 10 }),
  (obj) => {
    const { b, ...rest } = obj;
    return rest;
  },
  (obj) => (obj.e ? obj : { ...obj, e: "newKey" }),
];

const result = mergeAndTransform(objArray, transforms);

console.log(result);