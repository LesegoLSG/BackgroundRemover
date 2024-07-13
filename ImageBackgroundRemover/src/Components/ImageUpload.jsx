import React, { useState } from "react";
import axios from "axios";
import Loading from "../Reusables/Loading";
import DefaultBG from "../assets/DefaultBG.png";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [processedImageUrl, setProcessedImageUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedImage(file);
      setImageUrl(url);
      setLoading(true);

      // Remove the background of an image using remove.bg api
      const formData = new FormData();
      formData.append("image_file", file);
      formData.append("size", "auto");

      try {
        const response = await axios.post(
          "https://api.remove.bg/v1.0/removebg",
          formData,
          {
            headers: {
              "X-Api-Key": "PWyrY8qyJVfcj7qi8djjUGf4",
            },
            responseType: "blob",
          }
        );

        const reader = new FileReader();
        reader.onloadend = () => {
          setProcessedImageUrl(reader.result);
          setLoading(false);
          alert("Background removed successfully");
        };
        reader.readAsDataURL(response.data);
      } catch (error) {
        console.error("Error removing background:", error);
        setLoading(false);
      }
    }
  };

  const handleImageDownload = () => {
    const link = document.createElement("a");
    link.href = processedImageUrl || imageUrl;
    link.download = selectedImage.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center p-4 pt-20">
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2"
        />
      </div>
      <div className=" mb-4">
        <img
          src={processedImageUrl || imageUrl || DefaultBG}
          alt="Uploaded"
          className="max-w-full max-h-80 object-contain border p-2"
        />

        {loading && <Loading />}
      </div>
      {(imageUrl || processedImageUrl) && (
        <button
          onClick={handleImageDownload}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Download Image
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
