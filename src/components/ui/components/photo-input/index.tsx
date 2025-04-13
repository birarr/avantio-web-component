import React, { useRef, useState, useEffect } from "react";
import {
  useController,
  UseControllerProps,
  useFormContext,
} from "react-hook-form";
import { Edit2Icon, Plus } from "lucide-react";
import { checkImageDimensions } from "../../../../utils/images";
import { AccomodationModel } from "../../../../schemas/accomodation/accomodation-form";

interface PhotoInputProps extends UseControllerProps<any> {
  label?: string;
  index: number;
}

export const PhotoInput: React.FC<PhotoInputProps> = ({
  name,
  control,
  defaultValue,
  index,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { setError, clearErrors } = useFormContext<AccomodationModel>();

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (value && value.length > 0) {
      const objectUrl = URL.createObjectURL(value[0]);

      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [value]);

  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const { width, height } = await checkImageDimensions(files[0]);

    if (files && files.length > 0) {
      if (width <= 500 && height <= 500) {
        clearErrors(`photos.${index}.photo` as any);
        onChange(Array.from(files));
        return;
      } else {
        setError(`photos.${index}.photo` as any, {
          type: "custom",
          message: "Image is too big. Maximum allowed is 500px x 500px",
        });
      }
    }
  };

  return (
    <div className="flex items-center gap-4">
      <div className="w-40 h-40 relative group">
        <input
          type="file"
          accept="image/*"
          onChange={handleSelectFile}
          multiple={false}
          ref={inputRef}
          className="hidden"
        />
        <div
          onClick={() => inputRef.current?.click()}
          className={`
          w-full h-full border-2 border-dashed rounded-xl cursor-pointer
          flex items-center justify-center
          overflow-hidden relative
          ${!preview ? "bg-gray-100" : ""}
        `}
        >
          <div className="flex flex-col justify-center items-center">
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            )}

            {preview && (
              <Edit2Icon
                className="text-gray-400 group-hover:scale-110 transition-transform z-10"
                size={32}
              />
            )}

            {!preview && (
              <Plus
                className="text-gray-400 group-hover:scale-110 transition-transform z-10"
                size={32}
              />
            )}
            <div className="w-full flex justify-center text-center">
              {error && (
                <p className="text-red-500 text-sm my-1">{error.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
