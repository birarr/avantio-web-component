import * as Yup from "yup";

export interface AccomodationModel {
  name: string;
  address: string;
  description: string;
  type: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhoneNumber: string;
  formStep: number;
  photos: [
    {
      photo: File | undefined;
    }
  ];
}

// const photo = Yup.string();

export const initialAccomodationValues: AccomodationModel = {
  name: "",
  address: "",
  description: "",
  type: "",
  ownerName: "",
  ownerEmail: "",
  ownerPhoneNumber: "",
  formStep: 1,
  photos: [{ photo: undefined }],
};

export const accomodationFormSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(4)
    .max(128)
    .matches(/^[A-Za-zÀ-ÿ\s]+$/, "Only letters and spaces are allowed"),
  address: Yup.string().required().min(4).max(128),
  description: Yup.string()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value
    )
    .nullable()
    .notRequired()
    .min(128, "Must be at least 128 characters")
    .max(2048, "Must be at maximum of 2048 characters"),
  type: Yup.string().required(),
  ownerName: Yup.string().when("formStep", {
    is: (val: number) => {
      return val === 2;
    },
    then: (schema) =>
      schema
        .required("Name is required")
        .min(4, "Name must be at least 4 characters")
        .max(64, "Name must be at most 100 characters"),
  }),
  ownerEmail: Yup.string()
    .email()
    .when("formStep", {
      is: (val: number) => {
        return val === 2;
      },
      then: (schema) =>
        schema
          .required("Name is required")
          .min(4, "Name must be at least 4 characters")
          .max(64, "Name must be at most 100 characters"),
    }),
  ownerPhoneNumber: Yup.string()
    .transform((value, originalValue) =>
      String(originalValue).trim() === "" ? undefined : value
    )
    .nullable()
    .notRequired()
    .max(9, "The phone number can't exceed 9 digits."),
  formStep: Yup.number(),
});
