export interface newAccomodationStepsProps {
  step?: number;
  title: string;
  subtitle?: string;
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
  photo = "photo",
}

export const propertyTypesArray = [
  propertyTypes.apartament,
  propertyTypes.villa,
  propertyTypes.house,
];

export const MAX_PHOTOS = 2;
