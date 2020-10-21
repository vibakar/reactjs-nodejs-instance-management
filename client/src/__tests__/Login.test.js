import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../components/Login";
import { BrowserRouter } from 'react-router-dom';

test("renders Login component", () => {
  const { getByText } = render(<BrowserRouter><Login /></BrowserRouter>);
  const element = getByText(/Sign in/i);
  expect(element).toBeInTheDocument();
});

test("Login component should have a button role of submit", () => {
    const { getByText } = render(<BrowserRouter><Login /></BrowserRouter>);
    expect(screen.getByRole('submit')).toHaveTextContent('Login')
});

test("Should click on create account and register form should render", () => {
    const { getByText } = render(<BrowserRouter><Login /></BrowserRouter>);
    fireEvent.click(screen.getByText('Create an account'));
    const element = getByText(/Sign up/i);
    expect(element).toBeInTheDocument();
});