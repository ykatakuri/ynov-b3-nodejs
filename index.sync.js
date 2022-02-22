console.time();

const fs = require('fs');
const path = require("./file-paths").filePath;
const encoding = require("./file-paths").encoding;

try {
    const files = fs.readdirSync(path);

    files.forEach(file => {
        const data = fs.readFileSync(path+file, encoding); 
        console.log(`Filename: ${file}`);
        console.log(data);
    });

} catch (error) {
    console.error(error);
}

console.timeEnd();
