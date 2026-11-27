function deepFreeze(obj) {
  Object.values(obj).forEach((value) => {
    if (typeof value === "object" && value !== null) deepFreeze(value);
  });
  return Object.freeze(obj);
}

const data = {
  user: "Alice",
  stats: {
    score: 100,
    achievements: ["gold", "silver"],
  },
};

deepFreeze(data);

data.user = "Bob"; // This should fail
data.stats.score = 200; // This should fail
data.stats.achievements.push("bronze"); // This should fail

console.log(data);