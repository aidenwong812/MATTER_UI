import { ChangeEventHandler, useEffect } from "react"
import { useFormContext } from "react-hook-form"

interface ITextArea {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  placeholder?: string
  hookToForm: boolean
  classNameError?: string
  disabled?: boolean
  rows?: number
}

function TextArea({
  id,
  name,
  value,
  hookToForm,
  onChange,
  className,
  classNameError,
  disabled,
  placeholder,
  rows = 2,
}: ITextArea) {
  const formContext = useFormContext()
  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  useEffect(() => {
    if (name && hookToForm) {
      formContext.setValue(name, value)
    }
  }, [value, name, formContext, hookToForm])

  return (
    <div className="relative w-full">
      <textarea
        {...(id && { id: id })}
        value={value}
        className={`text-black border border-gray_3 placeholder:!text-gray_4
          rounded-[0.5rem] focus:ring-0 focus:!border-gray_6 w-full
          ${className ? className : ""} ${
          hookToForm && fieldError && fieldError?.message ? `${classNameError} border-red` : ""
        }`}
        {...(!hookToForm && {
          value: value,
          onChange: onChange,
        })}
        {...(isFullyHooked
          ? formContext.register(name, {
              onChange: (e) => onChange && onChange(e),
            })
          : {})}
        name={name}
        disabled={disabled}
        placeholder={placeholder || ""}
        rows={rows}
      />

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-error_500 text-[12px] pt-[4px]">{fieldError?.message as string}</p>
      )}
    </div>
  )
}

TextArea.defaultProps = {
  hookToForm: false,
}

export default TextArea
