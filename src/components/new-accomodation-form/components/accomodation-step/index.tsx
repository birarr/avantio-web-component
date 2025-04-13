import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import * as motion from "motion/react-client";
import { Input } from "../../../ui/components/input";
import { SelectDropdown } from "../../../ui/components/select-dropdown";
import {
  MAX_PHOTOS,
  newAccomodationStepsProps,
  propertyTypesArray,
} from "../../index.types";
import { AccomodationModel } from "../../../../schemas/accomodation/accomodation-form";
import { AnimatePresence } from "motion/react";
import { PhotoInput } from "../../../ui/components/photo-input";
import { useEffect } from "react";

export const AccomodationStep = ({
  title,
  subtitle,
}: newAccomodationStepsProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AccomodationModel>();

  const { fields, append } = useFieldArray({
    control,
    name: "photos",
  });

  useEffect(() => {
    if (fields?.length < 2) {
      for (let i = 0; i <= MAX_PHOTOS; i++) {
        append({ photo: undefined });
      }
    }
  }, []);

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
        <div className="flex flex-col gap-2">
          <h1 className="text-black w-full">{title}</h1>
          {subtitle && <h2 className="text-gray-900">{subtitle}</h2>}
        </div>
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
          <div className="flex gap-4">
            {fields?.map((_, index) => {
              return (
                <div key={index}>
                  <PhotoInput
                    name={`photos.${index}.photo`}
                    label="Upload Photos"
                    control={control}
                    defaultValue={[]}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
