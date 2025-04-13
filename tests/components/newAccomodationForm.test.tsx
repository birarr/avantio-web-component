import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it, expect, describe, test, beforeAll } from "vitest";
import { NewAccomodationForm } from "../../src/components/new-accomodation-form/index";
import "@testing-library/jest-dom/vitest";
import { mockedAccomodationData } from "../mock-data";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { AccomodationModel } from "../../src/schemas/accomodation/accomodation-form";
import { WrapperWithForm } from "../utils/renderWithForm";

describe("New Accomodation Form", () => {
  beforeAll(() => {
    render(
      <WrapperWithForm>
        <NewAccomodationForm />
      </WrapperWithForm>
    );
  });

  test("should the button be disabled at first render", async () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
  });

  test("should enabled the button if the required inputs are filled", async () => {
    const button = screen.getByRole("button");
    const inputName = screen.getByLabelText("Name *");
    await userEvent.type(inputName, mockedAccomodationData.name);
    await inputName.blur();

    const inputAddress = screen.getByLabelText("Address *");
    await userEvent.type(inputAddress, mockedAccomodationData.address);
    await inputName.blur();

    const inputType = screen.getByLabelText("Type *");
    await userEvent.type(inputType, mockedAccomodationData.type);
    await inputType.blur();

    expect(inputName).toBeInTheDocument();
    expect(inputAddress).toBeInTheDocument();
    expect(inputType).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    await expect(button).toBeEnabled();
  });
});
