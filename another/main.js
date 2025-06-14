const fs = require("fs");
const myMath = require("./math.js");

myMath.sum(1, 2);

const inputStream = fs.readFileSync("data.txt", "utf8");
const lines = inputStream.split("\n")
const casesCount = parseInt(lines[0])

for (let i = 0; i < casesCount; ++i) {
    const [v1, v2, v3] = lines[1 + i].split(" ").map((e) => parseInt(e));

    console.log(v1, v2, v3);
}

console.log("Finish")

