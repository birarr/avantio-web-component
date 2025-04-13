import React from "react";
import { render } from "@testing-library/react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// export function renderWithFormProvider(
//   ui,
//   { resolver, defaultValues = {}, ...renderOptions } = {}
// ) {
//   const Wrapper = ({ children }) => {
//     const methods = useForm({
//       defaultValues,
//       resolver: resolver ? yupResolver(resolver) : undefined,
//     });

//     return <FormProvider {...methods}>{children}</FormProvider>;
//   };

//   return render(ui, { wrapper: Wrapper, ...renderOptions });
// }
export const WrapperWithForm = ({ children }) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};
