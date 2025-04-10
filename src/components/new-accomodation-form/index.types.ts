export interface newAccomodationStepsProps {
  step?: number;
}

export interface newAccomodationStepsSelectProps {
  step: number;
  setStep: (item: number) => void;
}

export enum propertyTypes {
  apartament = "apartament",
  villa = "villa",
  house = "house",
}

export const ownerPropertiesNames = [
  "ownerName",
  "ownerEmail",
  "ownerPhoneNumber",
];

export enum typesOfEntities {
  accomodation = "accomodation",
  owner = "owner",
}

export const propertyTypesArray = [
  propertyTypes.apartament,
  propertyTypes.villa,
  propertyTypes.house,
];
