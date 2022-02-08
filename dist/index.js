"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Provides dev-time type structures for  `danger` - doesn't affect runtime.
// @ts-ignore
const generateMarkdownTable = require("markdown-table");
const generateCoverageTable_1 = require("./services/generateCoverageTable");
exports.defaultPluginOptions = [
    {
        title: "Coverage",
        ignoreCoveragePattern: [".test.", ".snap"],
        coverageFilesPath: "coverage/coverage-final.json"
    }
];
/**
 * Danger.JS plugin to display the code coverage on a pull request by commenting it via the CI
 */
function codeCoverage(pluginOptions = exports.defaultPluginOptions) {
    pluginOptions.forEach(options => {
        const filterFiles = (file) => {
            let isFileDisplayed = true;
            options.ignoreCoveragePattern.forEach(pattern => {
                if (file.match(pattern)) {
                    isFileDisplayed = false;
                }
            });
            return isFileDisplayed;
        };
        try {
            const coverageTable = [["File", "Branches", "Statements"]]
                .concat([[], [":heavy_plus_sign: **NEW FILES**"], []])
                .concat(generateCoverageTable_1.generateCoverageTable(danger.git.created_files.filter(filterFiles), options))
                .concat([[], [":pencil2: **MODIFIED FILES**"], []])
                .concat(generateCoverageTable_1.generateCoverageTable(danger.git.modified_files.filter(filterFiles), options));
            markdown(`\n# ${options.title}\n${generateMarkdownTable(coverageTable)}`);
        }
        catch (error) {
            fail(`An error occurred when getting the code coverage: ${error.message}. Danger exits with code: ${error.code}`);
        }
    });
}
exports.codeCoverage = codeCoverage;
