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
  classNameError?: string
  disabled?: boolean
}

function Input({
  id,
  name,
  value,
  hookToForm,
  onChange,
  className,
  classNameError,
  disabled,
  placeholder,
  type = "text",
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
    <div className="relative w-full flex flex-col items-center">
      <input
        {...(id && { id: id })}
        value={value}
        type={type}
        className={`text-black border border-gray_3 placeholder:!text-gray_4
          rounded-[0.5rem] focus:ring-0 focus:!border-gray_6
          w-full h-[47px]
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
      />

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-error_500 text-[12px] pt-[4px] w-full text-left">
          {fieldError?.message as string}
        </p>
      )}
    </div>
  )
}

Input.defaultProps = {
  hookToForm: false,
  type: "text",
}

export default Input
