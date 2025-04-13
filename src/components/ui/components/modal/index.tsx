import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useMemo, useState } from "react";
import { CheckCircleIcon, OctagonAlert } from "lucide-react";
import { FieldValues, useFormContext } from "react-hook-form";
import { initialAccomodationValues } from "../../../../schemas/accomodation/accomodation-form";

interface ModalProps {
  isSubmissionSuccessfull: boolean;
  setStep: (item: number) => void;
  onFinish?: (data: FieldValues) => void;
}

export const Modal = ({
  isSubmissionSuccessfull,
  setStep,
  onFinish,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const { getValues, reset } = useFormContext();

  const renderModalIcon = useMemo(() => {
    if (isSubmissionSuccessfull) {
      return <CheckCircleIcon className="text-green-500" size={40} />;
    } else {
      return <OctagonAlert className="text-orange-500" size={40} />;
    }
  }, []);

  const renderTitle = useMemo(() => {
    if (isSubmissionSuccessfull) {
      return (
        <DialogTitle as="h2" className={"text-2xl"}>
          Great! Accomodation created!
        </DialogTitle>
      );
    } else {
      return (
        <DialogTitle as="h2" className={"text-2xl"}>
          Ownnn! Error on accomodation creation!
        </DialogTitle>
      );
    }
  }, []);

  const renderSubtitle = useMemo(() => {
    if (isSubmissionSuccessfull) {
      return (
        <p className={`text-sm `}>You can add another one or go to homepage.</p>
      );
    } else {
      return (
        <p className={`text-sm `}>
          You can try add it again or go to homepage.
        </p>
      );
    }
  }, []);

  const renderConfirmButtonText = useMemo(() => {
    if (isSubmissionSuccessfull) {
      return <p>Add new accomodation</p>;
    } else {
      return <p className={`text-sm `}>Try again</p>;
    }
  }, []);

  const handleConfirmButton = () => {
    reset(initialAccomodationValues);
    setStep(0);
    setIsOpen(false);
    onFinish && onFinish(getValues());
  };

  const goToHomePage = (homepage: string) => {
    console.log(homepage);
  };

  return (
    <>
      <Dialog open={isOpen} onClose={setIsOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className={`relative transform overflow-hidden bg-white rounded-lg text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95`}
            >
              <div className={` px-4 pt-5 pb-4 sm:p-6 sm:pb-4`}>
                <div className="sm:flex sm:items-start">
                  <div
                    className={`mx-auto flex size-12 shrink-0 items-center justify-center rounded-full sm:mx-0 sm:size-10`}
                  >
                    {renderModalIcon}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left text-gray-900">
                    {renderTitle}
                    <div className="mt-2">{renderSubtitle}</div>
                  </div>
                </div>
              </div>
              <div
                className={` px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 flex  flex-col gap-2`}
              >
                <button
                  type="button"
                  onClick={handleConfirmButton}
                  className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs sm:ml-3 sm:w-auto`}
                >
                  {renderConfirmButtonText}
                </button>
                <button
                  type="button"
                  onClick={() => goToHomePage("homepage")}
                  className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs sm:ml-3 sm:w-auto`}
                >
                  Go to homepage
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
