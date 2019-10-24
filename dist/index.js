"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const figlet_1 = __importDefault(require("figlet"));
const ink_1 = require("ink");
const Ascii = ({ font = "Slant Relief", theme = "Monokai Dimmed", horizontalLayout = "default", verticalLayout = "default", text = "Ink-Ascii", }) => {
    const [renderedText, setRenderedText] = react_1.useState("");
    react_1.useEffect(() => {
        figlet_1.default.text(text, {
            font,
            horizontalLayout,
            verticalLayout,
        }, (err, result) => {
            if (err) {
                setRenderedText("Unable to render");
            }
            setRenderedText(result);
        });
    });
    return react_1.default.createElement(ink_1.Box, null, renderedText);
};
exports.default = Ascii;
//# sourceMappingURL=index.js.map