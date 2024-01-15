import { ChangeEventHandler, useEffect } from "react"
import { useFormContext } from "react-hook-form"

interface IInput {
  id?: string
  name?: string
  value?: any
  className?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  hookToForm: boolean
  type: "text" | "password" | "url" | "number"
  clasNameError?: string
  disabled?: boolean
  label?: string
}

function Input({
  id,
  name,
  value,
  hookToForm,
  onChange,
  className,
  clasNameError,
  disabled,
  label,
  placeholder,
}: IInput) {
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
      <input
        {...(id && { id: id })}
        value={value}
        className={`text-black border border-gray_6 placeholder:!text-gray_4
          rounded-[0.5rem] focus:ring-0 focus:!border-gray_6
          w-full h-[47px]
          ${className ? className : ""} ${
          hookToForm && fieldError && fieldError?.message ? `${clasNameError} border-red` : ""
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
      />

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-red text-[14px] pt-[8px]">{fieldError?.message as string}</p>
      )}
    </div>
  )
}

Input.defaultProps = {
  hookToForm: false,
  type: "text",
}

export default Input
