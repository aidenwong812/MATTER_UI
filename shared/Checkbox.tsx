import { InputHTMLAttributes } from "react"

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  id: string
  label?: string
  onChange?: any
}

const Checkbox = ({ checked, onChange, id, className, label, ...rest }: ICheckbox) => {
  return (
    <>
      <input checked={checked} type="checkbox" hidden id={id} className="hidden" {...rest} />
      <button
        {...(onChange && {
          onClick: onChange,
        })}
        className="cursor-pointer"
        type="button"
      >
        <div
          className="border-gray_3 w-[20px] h-[20px]
          rounded-[6px] bg-white border-[1.5px] p-[2px]"
        >
          {checked && <div className="w-full h-full rounded-[4px] bg-gray_5" />}
        </div>
      </button>
    </>
  )
}

export default Checkbox
