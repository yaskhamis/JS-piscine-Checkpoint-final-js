function swappableObject(obj) {
  const swapped = Object.fromEntries(Object.entries(obj).map(([k, v]) => [v, k]));
  return new Proxy(obj, {
    get: (target, prop) => (prop in target ? target[prop] : swapped[prop]),
  });
}

const obj = swappableObject({ a: "apple", b: "banana" });

console.log(obj.a); // "apple"
console.log(obj.apple); // "a"
console.log(obj.b); // "banana"
console.log(obj.banana); // "b"
