function createCurriedFilterAndMap(criteria, mapper) {
  return (obj) => {
    const kept = Object.entries(obj).filter(([key, value]) => criteria(key, value));

    return {
      filteredObject: Object.fromEntries(kept.map(([key, value]) => [key, mapper(value)])),
      keysKept: kept.length,
      keysFilteredOut: Object.keys(obj).length - kept.length,
    };
  };
}

const isNumberValue = (key, value) => typeof value === "number";
const increment = (val) => (typeof val === "number" ? val + 1 : val);

const filterAndIncrementNumbers = createCurriedFilterAndMap(
  isNumberValue,
  increment,
);

const inputObject = {
  name: "Alice",
  age: 25,
  score: 99,
  active: true,
};

const result = filterAndIncrementNumbers(inputObject);

console.log(result);