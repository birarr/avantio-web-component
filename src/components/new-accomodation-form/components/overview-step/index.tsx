import { useFormContext } from "react-hook-form";
import { newAccomodationStepsProps, typesOfEntities } from "../../index.types";
import { AccomodationFormKeysList } from "./components/accomodation-form-keys-list";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { AccomodationModel } from "../../../../schemas/accomodation/accomodation-form";

export const OverviewStep = ({ step }: newAccomodationStepsProps) => {
  const { getValues } = useFormContext<AccomodationModel>();
  console.log(getValues());
  const accomodationEntries = Object.entries(getValues())?.filter(
    (item) =>
      !item[0]?.startsWith(typesOfEntities.owner) && item?.[0] !== "formStep"
  );
  console.log({ accomodationEntries });
  const ownerEntries = Object.entries(getValues())?.filter(
    (item) =>
      item[0]?.startsWith(typesOfEntities.owner) && item?.[0] !== "formStep"
  );

  console.log({ accomodationEntries });
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -1500 }}
        animate={{ opacity: 1, scale: 1, x: -0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.6 }}
        key={step}
        className="flex flex-col justify-center p-4 gap-4 w-ful"
      >
        <div className="flex flex-col gap-2">
          <AccomodationFormKeysList
            values={accomodationEntries}
            title="Accomodation"
          />
          <AccomodationFormKeysList values={ownerEntries} title="Owner" />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
