"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCoverageForFile_1 = require("./getCoverageForFile");
const getCoverageState = ({ covered, all }) => (all > 0 ? covered / all : 1);
exports.getFileCoverageStats = (filePath, options) => {
    const fileCoverage = getCoverageForFile_1.getCoverageForFile(filePath, options);
    if (fileCoverage) {
        const { branches, statements } = fileCoverage;
        return [getCoverageState(branches), getCoverageState(statements)];
    }
    return [0, 0];
};
