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
  clasNameError?: string
  disabled?: boolean
  rows?: number
}

function TextArea({
  id,
  name,
  value,
  placeholder,
  hookToForm,
  onChange,
  className,
  clasNameError,
  rows = 1,
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
    <label {...(id && { htmlFor: id })} className={"rounded-md text-sm w-full h-full"}>
      <div className="relative flex items-stretch">
        <textarea
          {...(id && { id: id })}
          value={value}
          placeholder={placeholder}
          className={`
          text-black font-madeoutersans
        w-full p-2 border-[1px] border-slate-300
        ${className ? className : ""} ${
            hookToForm && fieldError && fieldError?.message ? clasNameError : ""
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
          rows={rows}
        />
      </div>

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-red-600 font-madeoutersans text-[10px]">
          {fieldError?.message as string}
        </p>
      )}
    </label>
  )
}

TextArea.defaultProps = {
  hookToForm: false,
  type: "text",
}

export default TextArea
