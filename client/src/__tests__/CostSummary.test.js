import React from "react";
import { render, screen } from "@testing-library/react";
import CostSummary from "../components/CostSummary";

test("renders cost summary in dashboard page", () => {
  const { getByText } = render(<CostSummary />);
  const element = getByText(/Stopped Instances/i);
  expect(element).toBeInTheDocument();
});

test("renders toggle cost switch in dashboard page", () => {
  const { getByText } = render(<CostSummary />);
  const element = getByText(/INR/i);
  expect(element).toBeInTheDocument();
});

test("Should not have 'Running Instances123' in dashboard page", () => {
   const testMessage = 'Running Instances123';
   const { getByText } = render(<CostSummary />);
   expect(screen.queryByText(testMessage)).toBeNull();
});
