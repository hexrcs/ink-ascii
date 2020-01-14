import React from "react";
import Ascii from "./index";
import { render } from "ink-testing-library";

it("renders correctly", () => {
  const { lastFrame } = render(
    <Ascii font="Slant Relief" horizontalLayout="default" verticalLayout="default" text="Yeah!" />
  );
  expect(lastFrame()).toMatchSnapshot();
});
