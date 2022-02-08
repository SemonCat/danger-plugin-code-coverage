"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const generateMarkdownLineForFileCoverage_1 = require("./generateMarkdownLineForFileCoverage");
exports.generateCoverageTable = (files, options) => {
    const filesByFolder = lodash_1.groupBy(files, (file) => file.split("/")[0]);
    const table = [];
    lodash_1.forEach(filesByFolder, (folderFiles, folderName) => {
        table.push([`:file_folder: **${folderName}**`, "", ""]);
        lodash_1.forEach(folderFiles, (file) => table.push(generateMarkdownLineForFileCoverage_1.generateMarkdownLineForFileCoverage(file, options)));
    });
    return table;
};
