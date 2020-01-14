import React, { useState, useEffect } from "react";
import figlet from "figlet";
import { Box } from "ink";

type AsciiProps = {
  font?: figlet.Fonts;
  theme?: string;
  horizontalLayout?: figlet.KerningMethods;
  verticalLayout?: figlet.KerningMethods;
  text?: string;
};

const Ascii = ({
  font = "Slant Relief",
  theme = "Monokai Dimmed",
  horizontalLayout = "default",
  verticalLayout = "default",
  text = "",
}: AsciiProps) => {
  return (
    <Box>
      {figlet.textSync(text, {
        font,
        horizontalLayout,
        verticalLayout,
      })}
    </Box>
  );
};

export default Ascii;
