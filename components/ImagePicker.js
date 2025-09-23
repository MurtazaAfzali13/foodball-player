"use client";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const imageRef = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handleClickImage(e) {
    e.preventDefault();
    imageRef.current.click();
  }

  function handleEventChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="flex flex-col space-y-2">
      <label className="font-medium text-gray-700">{label}</label>

      <div className="flex flex-col items-center gap-4">
        {/* Image preview box */}
        <div className="w-40 h-40 relative rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden bg-gray-50">
          {!pickedImage && (
            <p className="text-gray-400 text-sm text-center px-2">
              No image selected
            </p>
          )}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="Selected preview"
              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Hidden file input */}
        <input
          type="file"
          accept="image/png, image/jpeg"
          ref={imageRef}
          id={name}
          name={name}
          className="hidden"
          onChange={handleEventChange}
        />

        {/* Button */}
        <button
          onClick={handleClickImage}
          className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-md"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
