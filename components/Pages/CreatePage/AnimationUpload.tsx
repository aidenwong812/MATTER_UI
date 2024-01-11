import { useRef } from "react"
import { motion } from "framer-motion"
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.3,
          },
        },
      }}
    >
      <button
        onClick={handleClick}
        type="button"
        className="border border-gray_3 p-[40px] rounded-[14px]"
      >
        <Image
          link="/images/upload-imagination.png"
          blurLink="/images/upload-imagination.png"
          containerClasses="w-[160px] aspect-[1/1]"
          alt="not found icon"
        />
        <motion.span
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <p
            className="text-[12px]
          text-center"
          >
            Drag and drop or choose up file
          </p>
        </motion.span>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*, .gif, .mov, application/pdf, audio/*, video/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </button>
    </motion.div>
  )
}

export default AnimationUpload
