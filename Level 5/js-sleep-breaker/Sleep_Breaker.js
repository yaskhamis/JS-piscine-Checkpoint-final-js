function sleepBreaker(delay, breaker) {
  return Promise.race([
    new Promise((resolve) => setTimeout(resolve, delay)),
    breaker(),
  ]);
}

const breaker = async () => {
  await new Promise((res) => setTimeout(res, 100));
  return true;
};

sleepBreaker(1000, breaker).then(() => {
  console.log("Wake up!");
});