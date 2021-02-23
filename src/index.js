const fs = require('fs');

function readFileData(fileURL) {
    let data = fs.readFileSync(fileURL).toString();

    console.log(data);
}

readFileData(process.argv[2]);