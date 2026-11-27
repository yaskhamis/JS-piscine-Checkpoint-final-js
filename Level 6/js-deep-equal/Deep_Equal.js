function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) return false;
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  const keys = Object.keys(a);
  return keys.length === Object.keys(b).length && keys.every((key) => deepEqual(a[key], b[key]));
}

const objA = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const objB = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const objC = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming", "chess"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

console.log(deepEqual(objA, objB)); // true
console.log(deepEqual(objA, objC)); // false
