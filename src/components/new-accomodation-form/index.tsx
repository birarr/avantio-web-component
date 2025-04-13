import { useFormContext } from "react-hook-form";
import { useMemo, useState } from "react";
import { AccomodationStep } from "./components/accomodation-step";
import { OwnerStep } from "./components/owner-step";
import { OverviewStep } from "./components/overview-step";
import { Button } from "../ui/components/button";
import { AccomodationModel } from "../../schemas/accomodation/accomodation-form";
import * as motion from "motion/react-client";
import { Modal } from "../ui/components/modal";
import { getRandomBoolean } from "../../utils/app-usage";

export const NewAccomodationForm: React.FC<{
  onFinish?: (data: FormData) => void;
}> = ({}) => {
  const [step, setStep] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const buttonText = useMemo(() => {
    return step === 2 ? "Submit" : "Next";
  }, [step]);

  const {
    setValue,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useFormContext<AccomodationModel>();
  const { formStep } = watch();
  const isSubmissionSuccessfull = getRandomBoolean();

  const disabledButton = !isValid || step === 3;

  // const onAllStepsCompleted = () => {
  //   console.log(getValues());
  // };

  const onSubmit = () => {
    if (step === 2) {
      setShowModal(true);
      return;
    }
    setValue("formStep", formStep + 1);
    setStep(step + 1);
  };

  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <AccomodationStep
            key={"accomodation"}
            title={"Accomodation info"}
            subtitle={"Please fill the required info below:"}
          />
        );
      case 1:
        return (
          <OwnerStep
            key={"owner"}
            title={"Owner info"}
            subtitle={"Please fill the required info below:"}
            setStep={setStep}
          />
        );
      default:
        return (
          <OverviewStep title={"Overview"} subtitle={"Accomodation details:"} />
        );
    }
  };

  return (
    <div className="flex flex-col justify-center w-screen">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        {renderStep(step)}
        {showModal && (
          <Modal
            isSubmissionSuccessfull={isSubmissionSuccessfull}
            setStep={setStep}
          />
        )}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="w-screen px-4"
          key={step}
        >
          <Button
            text={buttonText}
            className="text-white w-full disabled:opacity-50 mb-2"
            type="submit"
            disabled={disabledButton}
          />
        </motion.div>
      </form>
    </div>
  );
};
