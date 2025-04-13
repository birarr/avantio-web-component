interface AccomodationPhotos {
  photos: File[];
}

export const AccomodationPhotos = ({ photos }: AccomodationPhotos) => {
  return (
    <div className="flex gap-4">
      {photos?.map((photo: any, index) => {
        if (photo?.photo?.[0]) {
          try {
            const imageSrc = URL?.createObjectURL(photo?.photo?.[0]);

            return (
              <div key={index}>
                <img src={imageSrc} alt="accomodation" />
              </div>
            );
          } catch (error) {
            console.log(error);
          }
        }
      })}
    </div>
  );
};
