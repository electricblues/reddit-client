// https://testing-library.com/docs/react-testing-library/intro/
//
import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import { App } from "./App";

describe("App", () => {
  it("renders all app basic elements", () => {
    render(<App />);
    const logo = screen.getByText("Logo");
    expect(logo).toBeTruthy();
  });
});
