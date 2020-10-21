import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from 'react-router-dom';

test("renders Dashboard header component", () => {
  const { getByText } = render(<BrowserRouter><Header /></BrowserRouter>);
  const element = getByText(/Dashboard/i);
  expect(element).toBeInTheDocument();
});

test("Should have logout button", () => {
  const { getByText } = render(<BrowserRouter><Header /></BrowserRouter>);
  getByText(/^Logout$/i);
});