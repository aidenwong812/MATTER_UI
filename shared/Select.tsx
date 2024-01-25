import { ReactNode } from "react"
import { useFormContext } from "react-hook-form"

interface ISelectOptions {
  value: any
  label: string | ReactNode
}

interface ISelect {
  id?: string
  name?: string
  value?: string
  className?: string
  onChange?: (e: any) => any
  placeholder?: string
  hookToForm: boolean
  options: ISelectOptions[]
  disabled: boolean
}

function Select({
  id,
  name,
  value,
  className,
  onChange,
  placeholder,
  hookToForm,
  options,
  disabled,
}: ISelect) {
  const formContext = useFormContext()

  const isFullyHooked = name && hookToForm && formContext

  const fieldError = isFullyHooked && formContext?.formState?.errors?.[name]

  return (
    <>
      <select
        {...(id && { id: id })}
        placeholder={placeholder}
        className={`rounded-[0.5rem] border border-gray_3
        focus:ring-0 !outline-none focus:border-gray_3
        w-full placeholder:text-gray_3 text-black
        font-hedvig bg-[url('/images/select-arrow.svg')]
        ${className ? className : ""} ${
          hookToForm && fieldError && fieldError?.message ? "border-red-600" : ""
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
      >
        {options.map((x) => (
          <option key={x.value} value={x.value}>
            {x.label}
          </option>
        ))}
      </select>

      {isFullyHooked && fieldError && fieldError?.message && (
        <p className="text-red-600 text-[10px]">{fieldError?.message as string}</p>
      )}
    </>
  )
}

Select.defaultProps = {
  hookToForm: false,
  disabled: false,
}

export default Select
