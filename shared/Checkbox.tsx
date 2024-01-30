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
          rounded-[6px] bg-white border-[1.5px]"
        >
          {checked && (
            <div
              className="w-full h-full
              bg-gradient-to-r from-[#A1EA04] to-[#DAEB02]
              rounded-[2px] shadow-[0px_0px_10px_10px_#a1ea041a]"
            />
          )}
        </div>
      </button>
    </>
  )
}

export default Checkbox
