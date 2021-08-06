import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  render(<CheckoutForm />);
  const headingElement = screen.getByText(/checkout form/i);
  expect(headingElement).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  //   const firstNameInput = screen.getByLabelText(/first name/i);
  const firstNameInput = screen.getByLabelText(/first name/i);
  const lastNameInput = screen.getByLabelText(/last name/i);
  const addressInput = screen.getByLabelText(/address/i);
  const cityInput = screen.getByLabelText(/city/i);
  const stateInput = screen.getByLabelText(/state/i);
  const zipInput = screen.getByLabelText(/zip/i);
  const submitBtn = screen.getByRole("button");
  userEvent.type(firstNameInput, "Jie");
  userEvent.type(lastNameInput, "Zhang");
  userEvent.type(addressInput, "88 S Lambda St");
  userEvent.type(stateInput, "CO");
  userEvent.type(cityInput, "Longmont");
  userEvent.type(zipInput, "80503");
  userEvent.click(submitBtn);
  const orderMessage = screen.getByTestId("successMessage");
  expect(orderMessage).toBeInTheDocument();
  expect(orderMessage).toHaveTextContent("Longmont");
  expect(orderMessage).toHaveTextContent("Jie Zhang");
  expect(orderMessage).toHaveTextContent("88 S Lambda St");
  expect(orderMessage).toHaveTextContent("80503");
  expect(orderMessage).not.toHaveTextContent("80502");
});
