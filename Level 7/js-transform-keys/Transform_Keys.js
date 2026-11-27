function transformKeys(obj, transformFn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      transformFn(key),
      typeof value === "object" && value !== null ? transformKeys(value, transformFn) : value,
    ])
  );
}

const obj = {
  FirstName: "Alice",
  LastName: "Doe",
  Address: {
    StreetName: "Main St",
    ZipCode: 12345,
  },
};

const toSnakeCase = (key) =>
  key
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .replace(/^_/, "");
const transformed = transformKeys(obj, toSnakeCase);
console.log(transformed);