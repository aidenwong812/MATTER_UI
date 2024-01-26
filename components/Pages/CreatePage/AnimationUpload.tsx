import Image from "../../../shared/Image"
import MediaPicker from "../../../shared/MediaPicker"

const AnimationUpload = () => (
  <MediaPicker hookToForm name="cover">
    {({ files }) => (
      <button
        type="button"
        className="border border-gray_3 p-[40px] rounded-[14px] w-full aspect-[1/1]
              flex flex-col items-center"
      >
        <Image
          link={files ? URL.createObjectURL(files[0]) : "/images/upload-imagination.png"}
          blurLink={files ? URL.createObjectURL(files[0]) : "/images/upload-imagination.png"}
          containerClasses="w-[160px] aspect-[1/1]"
          alt="not found icon"
        />
        <p
          className="text-[12px]
              text-center"
        >
          Drag and drop or choose up file
        </p>
      </button>
    )}
  </MediaPicker>
)

export default AnimationUpload
