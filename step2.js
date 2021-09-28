"use strict";

const fsP = require("fs/promises");
const path = argv[2];
const axios = require("axios");
const validUrl = require('valid-url');

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

/** Accept a URL and log the contents or log the error */
async function webCat(url) {
    let resp;
    try {
        resp = await axios.get(url);
    } catch (err) {
        console.log(`Error fetching ${url}, ${err}`);
    }
    console.log(resp.data);
}

if (validUrl.isUri(path)) {
    webCat(path);
} else {
    cat(path);
}
