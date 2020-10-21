import React from "react";
import { render } from "@testing-library/react";
import App from "../components/App";
import { BrowserRouter } from 'react-router-dom';

test("renders app component", () => {
  const { getByText } = render(<BrowserRouter><App /></BrowserRouter>);
  const element = getByText(/Loading/i);
  expect(element).toBeInTheDocument();
});
