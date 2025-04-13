import { propertyTypes } from "../../src/components/new-accomodation-form/index.types";
import { AccomodationModel } from "../../src/schemas/accomodation/accomodation-form";

export const mockedAccomodationData: AccomodationModel = {
  name: "Accomodation 1",
  address: "Addres 1 street, b neighborhood",
  description: "",
  type: propertyTypes.house,
  formStep: 0,
  ownerName: "John Doe",
  ownerEmail: "jonh@mail.com",
  ownerPhoneNumber: "999999999",
  photos: [{ photo: undefined }],
};
