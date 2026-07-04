import { useRef } from "react";
import { ImagePlus } from "lucide-react";

export default function UploadImage({
  image,
  setImage,
}) {
 
  const preview =
  image
    ? URL.createObjectURL(image)
    : null;
  
  const fileSize =
    image
      ?(image.size / 1024 /1024).toFixed(2)
      : "";

  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.click();
  }

  function handleChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    setImage(file);
  }

  return (
    <div className="space-y-4">

      <div>
        <h3 className="font-semibold text-lg">
          Product Image
        </h3>

        <p className="text-sm text-text-secondary">
          JPG, PNG, WEBP
        </p>
      </div>

      <div
        onClick={handleClick}
        className={`
          border-2
          border-dashed
          rounded-xl
          flex
          flex-col
          items-center
          justify-center
          cursor-pointer
          hover:border-primary
          transition
          ${
            preview
              ? "h-80 border-primary"
              : "h-56 border-border"
          }
       `}
      >

    {preview ? ( 
      <>
        <img
          src={preview}
          alt="Preview"
          className="
            h-44
            w-auto
            object-cover
            rounded-lg
            shadow
          "
      
        />

        <p className="text-sm text-text-secondary mt-3">
          {image.name}
        </p>

        <p className="text-sm text-text-secondary">
          {fileSize} MB
        </p>

        <p className="mt-1 text-xs text-text-medium">
          Click to change image
        </p>
      </> 
    ) : (
      <>
        <ImagePlus size={50} />
     
        <p className="mt-4">
          Click to upload image
        </p>
   
      </>
    )}

    <input
      ref={inputRef}
      type="file"
      hidden
      accept="image/*"
      onChange={handleChange}
    />
  
  </div>
</div>
  );
}

