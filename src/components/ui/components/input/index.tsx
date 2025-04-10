import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { capitalizeFirstLetter, renderLabel } from "../../../../utils/string";

export type InputFieldType =
  | "text"
  | "number"
  | "password"
  | "email"
  | "textarea";

interface InputProps<T extends FieldValues> {
  register?: UseFormRegister<T>;
  type: InputFieldType;
  placeHolder?: string;
  label?: string;
  name?: string;
  value?: string | number;
  required?: boolean;
  maxLength?: number;
  error?: FieldError;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export const Input = <T extends FieldValues>({
  placeHolder,
  label,
  name,
  type,
  value,
  required,
  maxLength,
  error,
  ...restProps
}: InputProps<T>) => {
  const getInputRender = () => {
    switch (type) {
      case "textarea": {
        return (
          <textarea
            autoComplete="new-off"
            placeholder={placeHolder}
            maxLength={maxLength}
            rows={4}
            required={required}
            className={
              "font-semibold bg-white focus:bg-gray-100 focus:ring-uiMidDark border border-gray-900 focus:border focus:border-uiMidDark block w-full sm:text-sm rounded-md text-gray-900 p-3 placeholder-textLight font-h1 shadow-xl"
            }
            {...restProps}
          />
        );
      }
      default: {
        return (
          <input
            style={{ width: "100%" }}
            type={type}
            name={name}
            value={value}
            className={
              "font-semibold bg-white focus:bg-gray-100 focus:ring-uiMidDark border border-gray-900 focus:border focus:border-uiMidDark block w-full sm:text-sm rounded-md text-gray-900 p-3 placeholder-textLight font-h1 shadow-xl"
            }
            placeholder={placeHolder}
            required={required}
            {...restProps}
          />
        );
      }
    }
  };
  return (
    <div>
      {label && (
        <label className={"block text-base font-medium text-gray-900 mb-2"}>
          {renderLabel(label, required as boolean)}
        </label>
      )}
      {getInputRender()}
      {error && (
        <p className="text-red-500">
          {capitalizeFirstLetter(error?.message as string)}
        </p>
      )}
    </div>
  );
};
