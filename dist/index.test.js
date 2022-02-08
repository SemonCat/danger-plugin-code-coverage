"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
describe("codeCoverage()", () => {
    beforeEach(() => {
        global.warn = jest.fn();
        global.message = jest.fn();
        global.fail = jest.fn();
        global.markdown = jest.fn();
    });
    afterEach(() => {
        global.warn = undefined;
        global.message = undefined;
        global.fail = undefined;
        global.markdown = undefined;
    });
    it("Checks for a that message has been called", () => {
        global.danger = {
            github: { pr: { title: "My Test Title" } },
        };
        index_1.codeCoverage();
        expect(global.message).toHaveBeenCalled();
    });
});
