function animal(name, maxSpeed, maxSpeedRange, midSpeed, midSpeedRange, speed, distance) {
  const maxPart = Math.min(distance, maxSpeedRange);
  const midPart = Math.min(distance - maxPart, midSpeedRange);
  const restPart = distance - maxPart - midPart;

  const seconds = maxPart / maxSpeed + midPart / midSpeed + restPart / speed;

  return new Promise((resolve) => setTimeout(() => resolve(name), seconds * 1000));
}

function zooRace(animals) {
  return Promise.race(animals);
}

const rabbit = animal("Rabbit", 20, 50, 10, 100, 5, 200);
const turtle = animal("Turtle", 5, 20, 3, 50, 1, 200);
const cheetah = animal("Cheetah", 30, 80, 15, 100, 10, 200);

zooRace([rabbit, turtle, cheetah]).then((winner) => {
  console.log(`The winner is: ${winner}`);
});