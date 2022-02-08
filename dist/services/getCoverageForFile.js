"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const path = require("path");
const parseCoverage_1 = require("../lib/parseCoverage");
const rootDir = process.cwd();
const getFileAbsolutePath = (filePath, projectRoot) => path.join(projectRoot || rootDir, filePath);
exports.getCoverageForFile = (filePath, options) => {
    const coverageFilePath = getFileAbsolutePath((options && options.coverageFilesPath) || "coverage/coverage-final.json");
    const coverageJson = require(coverageFilePath);
    const coverages = parseCoverage_1.parseCoverage(coverageJson);
    const coverageByPath = lodash_1.keyBy(coverages, (coverage) => coverage.path);
    return coverageByPath[getFileAbsolutePath(filePath, options && options.projectRoot)];
};
