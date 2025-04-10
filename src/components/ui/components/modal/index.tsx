import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";
// import { OctagonAlert } from "lucide-react";

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

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
                    {/* <OctagonAlert /> */}
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" className={`text-base`}>
                      This site is for adults only
                    </DialogTitle>
                    <div className="mt-2">
                      <p className={`text-sm `}>
                        You can only access if you're over 18 years old
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6`}>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className={`inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-xs sm:ml-3 sm:w-auto`}
                >
                  Yes'I am over 18 (Enter)
                </button>
                <a
                  rel="noopener noreferrer"
                  href="https://kidshealth.org/en/kids/puberty.html"
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </a>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
