import NextImage from "next/image"
import { CSSProperties } from "react"

interface IImage {
  link?: string
  containerStyle?: CSSProperties
  containerClasses?: string
  imageClasses?: string
  className?: string
  blurLink?: string
  alt?: string
}

const Image = ({ link, containerClasses, containerStyle, blurLink, alt, imageClasses }: IImage) => {
  return (
    <div className={`relative ${containerClasses || ""}`} style={containerStyle || {}}>
      {link && (
        <NextImage
          className={`absolute w-[100%] object-contain ${imageClasses}`}
          src={link}
          layout="fill"
          alt={alt || "not found image"}
          placeholder="blur"
          blurDataURL={
            blurLink ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcMXP2OQAGOQKc/DqDigAAAABJRU5ErkJggg=="
          }
          unoptimized
        />
      )}
    </div>
  )
}

export default Image
