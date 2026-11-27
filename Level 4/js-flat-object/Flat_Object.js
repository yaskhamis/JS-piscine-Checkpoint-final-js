function flattenAndMap(obj, mapper) {
  const flattened = {};

  function walk(o, prefix) {
    for (const key in o) {
      const value = o[key];
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        walk(value, prefix + key + ".");
      } else {
        flattened[prefix + key] = Array.isArray(value) ? value.map((v) => mapper(v)) : mapper(value);
      }
    }
  }

  walk(obj, "");

  const count = Object.keys(flattened).length;
  return { flattened, originalKeysCount: count, transformedKeysCount: count };
}

const nestedObj = {
  user: {
    name: "Alice",
    address: {
      city: "Wonderland",
      zip: 12345,
    },
  },
  meta: {
    roles: ["admin", "editor"],
    active: true,
  },
};

const toUpperCaseStrings = (value) =>
  typeof value === "string" ? value.toUpperCase() : value;

const result = flattenAndMap(nestedObj, toUpperCaseStrings);

console.log(result);