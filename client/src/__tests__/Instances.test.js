import React from "react";
import { render } from "@testing-library/react";
import Instances from "../components/Instances";

test("renders Dashboard Instances component", () => {
  const { getByText } = render(<Instances />);
  const element = getByText(/Instances/i);
  expect(element).toBeInTheDocument();
});


test("should render instance table", () => {
    const { getByText } = render(<Instances />);
    getByText((content, element) => content.startsWith('Status'));
});