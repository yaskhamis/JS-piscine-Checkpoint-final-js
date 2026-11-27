function trapObject(obj, fn) {
  return new Proxy(obj, {
    get(target, key) {
      fn("get", key, target[key]);
      return target[key];
    },
    set(target, key, newValue) {
      fn("set", key, target[key], newValue);
      target[key] = newValue;
      return true;
    },
  });
}

const logger = (action, key, value, newValue) => {
  if (action === "get") {
    console.log(`Accessed ${key}: ${value}`);
  } else if (action === "set") {
    console.log(`Modified ${key}: ${value} → ${newValue}`);
  }
};

const obj = trapObject({ name: "Alice", age: 25 }, logger);

console.log(obj.name); // Logs: Accessed name: Alice
obj.age = 30; // Logs: Modified age: 25 → 30
console.log(obj.age); // Logs: Accessed age: 30
