"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const roundPercentage_1 = require("./roundPercentage");
exports.formatCoverageState = (stat) => {
    const percentage = roundPercentage_1.roundPercentage(stat * 100);
    const GREEN = "00ff00";
    const RED = "ff0000";
    const ORANGE = "ffaa00";
    let color = GREEN;
    if (percentage < 80) {
        color = ORANGE;
    }
    if (percentage < 50) {
        color = RED;
    }
    return `![${percentage}](https://via.placeholder.com/15/${color}/000000?text=+) ${percentage}%`;
};
