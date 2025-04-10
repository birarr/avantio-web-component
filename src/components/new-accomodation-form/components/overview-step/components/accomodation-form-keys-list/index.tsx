import { capitalizeFirstLetter } from "../../../../../../utils/string";

interface FormKeysListProps {
  values: [string, any][];
  title: string;
}
export const AccomodationFormKeysList = ({
  values,
  title,
}: FormKeysListProps) => {
  return (
    <div className="my-4">
      <h1 className="text-black w-full">{title}</h1>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-200 text-gray-200" />
      {values.map(([item, value], index: number) => (
        <ul key={index} className="text-gray-900">
          <span className="font-bold">{`${capitalizeFirstLetter(
            item
          )}: `}</span>
          <span>{`${capitalizeFirstLetter(value)}`}</span>
        </ul>
      ))}
    </div>
  );
};
