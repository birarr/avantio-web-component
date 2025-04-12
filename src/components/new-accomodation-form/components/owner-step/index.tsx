import { Controller, useFormContext } from "react-hook-form";
import * as motion from "motion/react-client";
import { newAccomodationStepsProps } from "../../index.types";
import { Input } from "../../../ui/components/input";
import { AccomodationModel } from "../../../../schemas/accomodation/accomodation-form";
import { AnimatePresence } from "motion/react";

export const OwnerStep = ({
  step,
  title,
  subtitle,
}: newAccomodationStepsProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<AccomodationModel>();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -1500 }}
        animate={{ opacity: 1, scale: 1, x: -0 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.6 }}
        key={step}
        className="flex flex-col justify-center p-4 gap-4"
      >
        <div className="text-black flex flex-col justify-center gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-black w-full">{title}</h1>
            {subtitle && <h2 className="text-gray-900">{subtitle}</h2>}
          </div>
          <div className="flex flex-col justify-center gap-4">
            <Controller
              name="ownerName"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <Input
                    type="text"
                    label="Name"
                    required={true}
                    error={errors?.ownerName}
                    {...field}
                  />
                </>
              )}
            />
            <Controller
              name="ownerEmail"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <Input
                    type="email"
                    label="Email"
                    required={true}
                    error={errors?.ownerEmail}
                    {...field}
                  />
                </>
              )}
            />
            <Controller
              name="ownerPhoneNumber"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <Input
                    type="number"
                    label="Phone number"
                    error={errors?.ownerPhoneNumber}
                    {...field}
                  />
                </>
              )}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
