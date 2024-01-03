import { FC } from "react"
import TextArea from "../../shared/TextArea"
import Input from "../../shared/Input"

interface TextInputProps {
  label: string
  onChange: any
  value: string
  placeholder: string
  id: string
  className?: string
  type?: "single" | "multiple"
  hookToForm?: boolean
}

const TextInput: FC<TextInputProps> = ({
  label,
  onChange,
  value,
  placeholder,
  id,
  className,
  type = "single",
  hookToForm = false,
}) => (
  <div
    className={`flex flex-col gap-[5px] ${className}
    font-poppins
    xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
    outline-none`}
  >
    <p
      className="font-poppins_medium
            md:text-[12px] lg:text-[16px] xl:text-[20px]
            text-[#484848] dark:text-white"
    >
      {label}
    </p>
    {type === "single" ? (
      <Input
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="dark:bg-[#1A2629]
            outline-none
            xl:h-[47px] lg:h-[37.6px] md:h-[28.2px] !w-full
            border border-[#BEBEBE]
            text-[#484848] dark:text-white
            focus:border-[#54B3C3] focus:!ring focus:!ring-[#54B3C3] focus:!ring-opacity-0
            xl:placeholder:text-[16px]
            lg:placeholder:text-[12.8px]
            md:placeholder:text-[9.6px]
            placeholder:text-[#BEBEBE]
            rounded-md"
        placeholder={placeholder}
        hookToForm={hookToForm}
      />
    ) : (
      <TextArea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="!w-full dark:bg-[#1A2629]
                outline-none
                rounded-md
                text-[#484848] dark:text-white
                xl:placeholder:text-[16px]
                lg:placeholder:text-[12.8px]
                md:placeholder:text-[9.6px]
                placeholder:text-[#BEBEBE]
                focus:border-[#54B3C3] focus:!ring focus:!ring-[#54B3C3] focus:!ring-opacity-0
                border border-[#BEBEBE]"
        placeholder={placeholder}
        rows={5}
        hookToForm={hookToForm}
      />
    )}
  </div>
)

export default TextInput
