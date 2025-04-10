export const capitalizeFirstLetter = (val: string) => {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
};

export const renderLabel = (label: string, required: boolean) => {
  return required ? `${label} *` : `${label}`;
};
