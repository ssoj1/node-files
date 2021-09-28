"use strict";

const fsP = require("fs/promises");
const argv = process.argv;

/** Accept a file and print the contents or exit on error */
async function cat(path){
    let contents;
    try {
        contents = await fsP.readFile(path, "utf8");
    } catch (err) {
        process.exit(1);
    }
    console.log("file contents ", contents);
}

cat(argv[2]);