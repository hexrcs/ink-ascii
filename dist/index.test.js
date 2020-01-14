"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const index_1 = __importDefault(require("./index"));
const ink_testing_library_1 = require("ink-testing-library");
it("renders correctly", () => {
    const { lastFrame } = ink_testing_library_1.render(react_1.default.createElement(index_1.default, { font: "Slant Relief", horizontalLayout: "default", verticalLayout: "default", text: "Yeah!" }));
    expect(lastFrame()).toMatchSnapshot();
});
//# sourceMappingURL=index.test.js.map