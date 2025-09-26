

"use client"
import React from "react";

const Image = ({ image, showImage, setShowImage }) => {
  if (!showImage) return null; // وقتی false باشه هیچی نشون نده

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded-lg shadow-lg">
        {/* دکمه بستن */}
        <button
          onClick={() => setShowImage(false)}
          className="absolute top-2 right-2 text-gray-600 text-xl"
        >
          ✕
        </button>

        {/* عکس */}
        <img
          src={image}
          alt="popup"
          className="max-w-[90vw] max-h-[80vh] object-contain rounded"
        />
      </div>
    </div>
  );
};

export default Image;
