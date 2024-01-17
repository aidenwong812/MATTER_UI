import { useRef } from "react"
import { useDeploy } from "../../../providers/DeployProvider"
import Image from "../../../shared/Image"

const AnimationUpload = () => {
  const { setAnimationFile, setCover, setAnimationSrc } = useDeploy()
  const fileInputRef = useRef(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file) {
      if (file.type.includes("image")) {
        setCover(file)
        return
      }
      setAnimationFile(file)
      const objectURL = URL.createObjectURL(file)
      setAnimationSrc(objectURL)
    }
  }

  const handleClick = () => {
    fileInputRef.current.click()
  }

  return (
    <button
      onClick={handleClick}
      type="button"
      className="border border-gray_3 p-[40px] rounded-[14px] h-full aspect-[1/1]
      flex flex-col items-center justify-center"
    >
      <Image
        link="/images/upload-imagination.png"
        blurLink="/images/upload-imagination.png"
        containerClasses="w-[160px] aspect-[1/1]"
        alt="not found icon"
      />
      <p
        className="text-[12px]
      text-center"
      >
        Drag and drop or choose up file
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*, .gif, .mov, application/pdf, audio/*, video/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </button>
  )
}

export default AnimationUpload
