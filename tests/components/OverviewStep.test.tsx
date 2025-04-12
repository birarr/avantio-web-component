import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect, describe, test } from "vitest";
import { OverviewStep } from "../../src/components/new-accomodation-form/components/overview-step";
import "@testing-library/jest-dom/vitest";
import { WrapperWithForm } from "../utils/renderWithForm";
import { mockedAccomodationData } from "../mock-data";
import { FormProvider, useForm } from "react-hook-form";

describe("Overview Step", () => {
  render(
    <WrapperWithForm>
      <OverviewStep title="Overview" />
    </WrapperWithForm>
  );

  it("should render heading with text", async () => {
    const heading = screen.getByRole("heading");

    expect(heading).toHaveTextContent(/overview/i);

    // expect(
    //   screen.getByRole("heading", { name: /overview/i })
    // ).toBeInTheDocument();
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
