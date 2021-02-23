const fs = require('fs');
const { url } = require('inspector');

function checkfile(fileURL) {
    let urlArray = fileURL.split('\\');
    let file = urlArray[urlArray.length - 1];

    if(!file.includes('.ws')) {
        return false;
    } else {
        return true;
    }
}

function readFileData(fileURL) {
    let isWSFile = checkfile(fileURL);

    if(!isWSFile) {
        console.log("That isn't a WhyScript file!");
        process.exit(1);
    }

    let data = fs.readFileSync(fileURL).toString();
    console.log(data);
}

readFileData(process.argv[2]);