const fs = require('fs');           // Import fs. (filesystem module from nodeJS)

function checkfile(fileURL) {                   // Function to check if file url has .ws extension.
    let urlArray = fileURL.split('\\');         // Split the array by the \\ used in urls and stores it in the 'urlArray' variable.
    let file = urlArray[urlArray.length - 1];   // Get the last index from array, assumes that's the actual file and not a folder and stores it in the 'file' variable.

    if(!file.includes('.ws')) {                 // If file doesnt include .ws.
        return false;                           // Return false.
    } else {                                    // Else if it does include .ws, will give false positives for files like 'filename.ws.txt' but lets hope that never happens.
        return true;                            // Return true.
    }
}

function readFileData(fileURL) {                        // Function to read file data.
    let isWSFile = checkfile(fileURL);                  // Run checkFile function and stores the returned boolean in the 'isWSFile' variable.

    if(!isWSFile) {                                     // If it isn't a WhyScript file.
        console.log("That isn't a WhyScript file!");    // Log text about the fact that it isn't a WhyScript file to the console.
        process.exit(1);                                // Exit the process because we can't continue without a WhyScript file.
    }

    let data;                                           // Create an empty variable called 'data' for use later.

    try {                                               // Try to.
        data = fs.readFileSync(fileURL).toString();     // Get the data from the file using the fs module, stores it in the 'data' variable.
    } catch(err) {                                      // Catch errors
        console.log(err.message);                       // Log error message to console so the user knows what happened.
        process.exit(1);                                // Exit the process because we can't continue without data.
    }
    
    return data;                                        // Returns the data.
}

let data = readFileData(process.argv[2]);       // Run readFileData function and stores the returned data in the 'data' variable.   

console.log(data);                              // Log the data so we can check if we get the expected results.