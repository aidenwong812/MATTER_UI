import { ReactNode, useEffect, useRef, useState } from "react"
import { useFormContext } from "react-hook-form"

interface IMediaPickerChild {
  openPicker: () => {}
  error: string
  files: FileList | undefined
}

interface IMediaPicker {
  id?: string
  name?: string
  children?: ReactNode | ((props: IMediaPickerChild) => any)
  hookToForm?: boolean
}

const convertFilesToFileList = (files: File[]) => {
  const list = new DataTransfer()
  files.map((file) => list.items.add(file))
  return list.files
}

function MediaPicker({ id, name, children, hookToForm }: IMediaPicker) {
  const formContext = useFormContext()
  const filePickerRef = useRef<HTMLInputElement | undefined>()
  const [files, setFiles] = useState<FileList | undefined>()

  const [error, setError] = useState<string | null | boolean | undefined>()
  const [isRegistered, setIsRegistered] = useState<boolean>()

  const openPicker = () => {
    filePickerRef.current && filePickerRef.current.click()
  }

  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]?.message

  const handleFilePicked = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    try {
      setError(null)
      setFiles(undefined)

      const pickedFiles = Array.from(e.target.files)
      const uniquePickedFiles = convertFilesToFileList(pickedFiles)
      setFiles(uniquePickedFiles)

      if (isFullyHooked) {
        formContext.setValue(name, uniquePickedFiles)
        formContext.trigger([name])
      }
    } catch (error: any) {
      setError(error?.message || "Failed to pick files")
      setFiles(undefined)

      if (isFullyHooked) {
        formContext.setValue(name, undefined)
        formContext.trigger([name])
      }
    }
  }

  useEffect(() => {
    setError(fieldError as any)
  }, [fieldError])

  useEffect(() => {
    if (isFullyHooked && !isRegistered) {
      formContext.register(name)
      setIsRegistered(true)
    }
  }, [formContext, isRegistered, isFullyHooked, name])

  return (
    <div className="relative">
      <input
        {...(id && { id: id })}
        type="file"
        className="absolute w-full h-full left-0 top-0 z-[2] opacity-0 cursor-pointer"
        accept="image/*"
        ref={filePickerRef as any}
        onChange={handleFilePicked}
      />
      {typeof children === "function" &&
        (children as any)({
          openPicker,
          files,
          error,
        })}
      {typeof children !== "function" && children}
      <p className="text-error_500 text-[12px] pt-[4px] w-full text-left">{error as string}</p>
    </div>
  )
}

MediaPicker.defaultProps = {
  hookToForm: false,
}

export default MediaPicker
