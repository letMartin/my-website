export function ProfileImage() {
  return (
    <div className="w-full">
      <div className="border-8 border-white -mt-24 mx-auto max-w-fit rounded-full">
        <img
          src="photo.jpg"
          alt="Martin Bibyakov"
          className="w-36 h-36 object-contain rounded-full mx-auto"
        />
      </div>
    </div>
  );
}
