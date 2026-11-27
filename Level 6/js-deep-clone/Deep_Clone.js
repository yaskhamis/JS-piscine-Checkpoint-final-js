function deepClone(obj, seen = new WeakMap()) {
  if (obj === null || typeof obj !== "object") return obj;
  if (seen.has(obj)) return seen.get(obj);

  const copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);

  Object.keys(obj).forEach((key) => {
    copy[key] = deepClone(obj[key], seen);
  });
  return copy;
}

const original = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "gaming"],
  address: {
    city: "Wonderland",
    zip: 12345,
  },
};

const cloned = deepClone(original);

cloned.name = "Bob";
cloned.hobbies.push("chess");
cloned.address.city = "Nowhere";

console.log(original);
console.log(cloned);