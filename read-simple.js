const fs = require('fs');
fs.readFile("index.html", (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Async OP : ", data.toString());
});
console.log("Reading Files ...");

const data = fs.readFileSync("index.html");

console.log("Sync OP: ",data.toString()); 