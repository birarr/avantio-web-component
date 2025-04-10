import { Controller, useFormContext } from "react-hook-form";
import * as motion from "motion/react-client";
import { Input } from "../../../ui/components/input";
import { SelectDropdown } from "../../../ui/components/select-dropdown";
import {
  newAccomodationStepsProps,
  propertyTypesArray,
} from "../../index.types";
import { AccomodationModel } from "../../../../schemas/accomodation/accomodation-form";
import { AnimatePresence } from "motion/react";

export const AccomodationStep = ({}: newAccomodationStepsProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AccomodationModel>();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1, scale: 0, x: -1500 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 1, scale: 1, x: 1500 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        key="accomodation"
        className="flex flex-col justify-center p-4 gap-4"
      >
        <h1 className="text-black w-full">Accomodation</h1>
        <div className="flex flex-col gap-4">
          <Controller
            name="name"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <Input
                  type="text"
                  label="Name"
                  error={errors.name}
                  required={true}
                  {...field}
                />
              </>
            )}
          />
          <Controller
            name="address"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <Input
                  type="text"
                  label="Address"
                  error={errors.address}
                  {...field}
                  required={true}
                />
              </>
            )}
          />
          <Controller
            name="description"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <Input
                  type="textarea"
                  label="Description"
                  error={errors.description}
                  {...field}
                />
              </>
            )}
          />
          <Controller
            name="type"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <>
                <SelectDropdown
                  label="Type"
                  nameProp="type"
                  className="text-gray-900 w-full"
                  placeholder="Select a type:"
                  error={errors.type}
                  propertyTypesArray={propertyTypesArray}
                  field={field}
                  required={true}
                />
              </>
            )}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
