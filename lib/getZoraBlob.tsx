import { zorbImageDataURI } from "@zoralabs/zorb"

export const getZoraBlob = (address) => {
  const dataURI = zorbImageDataURI(address)
  const base64String = dataURI.substring("data:image/svg+xml;base64,".length)
  const svgString = atob(base64String)
  return new Blob([svgString], { type: "image/svg+xml" })
}
