import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect, describe, test } from "vitest";
import { AccomodationStep } from "../../src/components/new-accomodation-form/components/accomodation-step";
import "@testing-library/jest-dom/vitest";
import { mockedAccomodationData } from "../mock-data";
import { WrapperWithForm } from "../utils/renderWithForm";

describe("AccomodationStep", () => {
  render(
    <WrapperWithForm>
      <AccomodationStep title="Accomodation" />
    </WrapperWithForm>
  );
  it("should render heading with text", async () => {
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/accomodation/i);
  });

  it("should render the name input", async () => {
    const input = screen.getByLabelText("Name *");

    expect(input).toBeInTheDocument();
  });

  it("should allow typing in the name input", async () => {
    const input = screen.getByLabelText("Name *");

    expect(input).toBeInTheDocument();

    await userEvent.type(input, mockedAccomodationData.ownerName);

    expect(input).toHaveValue(mockedAccomodationData.ownerName);
  });
});
