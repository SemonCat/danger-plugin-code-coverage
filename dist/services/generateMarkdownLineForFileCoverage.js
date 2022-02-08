"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatCoverageState_1 = require("../lib/formatCoverageState");
const getFileCoverageStats_1 = require("./getFileCoverageStats");
exports.generateMarkdownLineForFileCoverage = (filePath, options) => {
    const fileCoverage = getFileCoverageStats_1.getFileCoverageStats(filePath, options);
    const filePathWithoutFirstFolder = filePath.slice(filePath.indexOf("/") + 1);
    return [`↦ ${filePathWithoutFirstFolder}`].concat(fileCoverage.map(formatCoverageState_1.formatCoverageState));
};
