import { ControllerRenderProps, FieldError, Path } from "react-hook-form";
import { propertyTypes } from "../../../new-accomodation-form/index.types";
import { ComponentBaseProps } from "../../models/ComponentBaseProps";
import { AccomodationModel } from "../../../../schemas/accomodation/accomodation-form";
import { capitalizeFirstLetter, renderLabel } from "../../../../utils/string";

interface SelectDropdownProps extends ComponentBaseProps {
  label: string;
  disabled?: boolean;
  labelClassName?: string;
  placeholder?: string;
  nameProp: Path<AccomodationModel>;
  error?: FieldError;
  propertyTypesArray: propertyTypes[];
  field: ControllerRenderProps<AccomodationModel, Path<AccomodationModel>>;
  required?: boolean;
}

export const SelectDropdown = ({
  label,
  disabled,
  className,
  labelClassName,
  error,
  field,
  propertyTypesArray,
  required,
}: SelectDropdownProps) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor="fruit"
          className={`${
            labelClassName
              ? labelClassName
              : "block mb-2 font-medium text-gray-900"
          }`}
        >
          {renderLabel(label, required as boolean)}
        </label>
      )}
      <select
        {...field}
        disabled={disabled}
        className={`p-2 border border-gray-900 rounded-md shadow-xl ${className}`}
      >
        <option value="" disabled>
          Please select the property type:
        </option>
        {propertyTypesArray.map((option, index) => (
          <option key={index} value={option}>
            {capitalizeFirstLetter(option)}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-red-500">
          {capitalizeFirstLetter(error?.message as string)}
        </p>
      )}
    </div>
  );
};
