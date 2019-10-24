import React, { useState, useEffect } from "react";
import figlet from "figlet";
import { Box } from "ink";

type AsciiProps = {
  font: figlet.Fonts;
  theme: string;
  horizontalLayout: figlet.KerningMethods;
  verticalLayout: figlet.KerningMethods;
  text: string;
};

const Ascii = ({
  font = "Slant Relief",
  theme = "Monokai Dimmed",
  horizontalLayout = "default",
  verticalLayout = "default",
  text = "Ink-Ascii",
}: AsciiProps) => {
  const [renderedText, setRenderedText] = useState<string | undefined>("");
  useEffect(() => {
    figlet.text(
      text,
      {
        font,
        horizontalLayout,
        verticalLayout,
      },
      (err, result) => {
        if (err) {
          setRenderedText("Unable to render");
        }
        setRenderedText(result);
      }
    );
  });

  return <Box>{renderedText}</Box>;
};

export default Ascii;
