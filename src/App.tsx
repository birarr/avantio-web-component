import { FormProvider, useForm } from "react-hook-form";
import "./App.css";
import { NewAccomodationForm } from "./components/new-accomodation-form";
import {
  accomodationFormSchema,
  initialAccomodationValues,
} from "./schemas/accomodation/accomodation-form";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const methods = useForm({
    mode: "onBlur",
    resolver: yupResolver(accomodationFormSchema),
    defaultValues: initialAccomodationValues,
  });

  return (
    <FormProvider {...methods}>
      <NewAccomodationForm />
    </FormProvider>
  );
}

export default App;
