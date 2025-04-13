import { capitalizeFirstLetter } from "../../../../../../utils/string";
import { typesOfEntities } from "../../../../index.types";

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
      <h2 className="text-black w-full text-2xl">{title}</h2>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-200 text-gray-200" />
      {values.map(([item, value], index: number) => {
        const string =
          title.toLowerCase() === typesOfEntities.owner ? item.slice(5) : item;
        return (
          <ul key={index} className="text-gray-900">
            <span className="font-bold">{`${capitalizeFirstLetter(
              string
            )}: `}</span>
            <span>{`${capitalizeFirstLetter(value)}`}</span>
          </ul>
        );
      })}
    </div>
  );
};
