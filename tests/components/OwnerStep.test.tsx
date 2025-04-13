import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect, describe, test } from "vitest";
import { OwnerStep } from "../../src/components/new-accomodation-form/components/owner-step";
import "@testing-library/jest-dom/vitest";
import { WrapperWithForm } from "../utils/renderWithForm";
import { mockedAccomodationData } from "../mock-data";
import { FormProvider, useForm } from "react-hook-form";

describe("OwnerStep", () => {
  render(
    <WrapperWithForm>
      <OwnerStep title="Owner" />
    </WrapperWithForm>
  );

  it("should render heading with text", async () => {
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/owner/i);
  });

  it("should render the name input", async () => {
    const input = screen.getByLabelText("Email *");

    expect(input).toBeInTheDocument();
  });

  it("should allow typing in the email input", async () => {
    const input = screen.getByLabelText("Email *");

    expect(input).toBeInTheDocument();

    await userEvent.type(input, mockedAccomodationData.ownerName);

    expect(input).toHaveValue(mockedAccomodationData.ownerName);
  });
});
