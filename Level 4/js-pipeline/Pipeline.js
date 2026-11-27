// function pipeline(initialValue, functions) {
//   return functions.reduce(
//     ({ finalValue, steps }, fn, index) => {
//       const output = fn(finalValue);
//       return {
//         finalValue: output,
//         steps: [...steps, { index, input: finalValue, output }],
//       };
//     },
//     { finalValue: initialValue, steps: [] }
//   );
// }

function pipeline(initialValue, functions) {
  let value = initialValue;
  const steps = [];

  functions.forEach(function (fn, index) {
    const output = fn(value);
    steps.push({ index: index, input: value, output: output });
    value = output;
  });

  return { finalValue: value, steps: steps };
}

const functions = [
  (val) => val + 1,
  (val) => val * 2,
  (val) => `Result: ${val}`,
];

const result = pipeline(0, functions);

console.log(result);