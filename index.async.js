console.time();

const fs = require('fs');
const { filePath: path, encoding } = require("./file-paths");

fs.readdir(path, (error, files) => {
    if (error) {
        console.error(error);
    }

    files.forEach(file => {
        fs.readFile(path+file, encoding, (error, data) => {
            if (error) {
                console.error(error);
            }

            console.log(data);
        }); 
    });
});

console.timeEnd();
