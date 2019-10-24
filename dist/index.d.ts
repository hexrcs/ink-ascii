/// <reference types="react" />
import figlet from "figlet";
declare type AsciiProps = {
    font: figlet.Fonts;
    theme: string;
    horizontalLayout: figlet.KerningMethods;
    verticalLayout: figlet.KerningMethods;
    text: string;
};
declare const Ascii: ({ font, theme, horizontalLayout, verticalLayout, text, }: AsciiProps) => JSX.Element;
export default Ascii;
