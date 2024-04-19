const fs = require('fs');
fs.readFile("index.html", (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
console.log()
const data = fs.readFileSync("index.html");

console.log("Sync OP: ",data.toString()); 