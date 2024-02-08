import { useEffect, useState } from "react"
import getProductImage from "../lib/getProductImage"

const useProductImage = (cover) => {
  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {
    const init = async () => {
      const url = await getProductImage(cover)

      setImageUrl(url)
    }

    if (!cover) return
    init()
  }, [cover])

  return {
    imageUrl,
  }
}

export default useProductImage
