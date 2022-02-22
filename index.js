const { readFile } = require('fs');

/*
try {
    const data = readFile("./test.txt", "utf-8");
    console.log(data);
} catch (error) {
    console.error(error);
}*/

readFile("./test.txt", "utf-8", (error, data) => {
    console.error(error);
    console.log(data);
});

console.log("continue...");