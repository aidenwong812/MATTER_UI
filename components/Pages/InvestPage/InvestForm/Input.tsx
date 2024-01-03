const Input = ({ label, value, setValue }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className="">
      <p
        className="font-poppins 
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            text-[#484848] dark:text-white
            xl:pt-[50px] lg:text-[40px] md:text-[30px]
            xl:pb-[30px] lg:pb-[24px] md:pb-[18px]"
      >
        {label}
      </p>
      <div
        className="flex items-center
      border border-[#54B3C3] 
      rounded-full dark:bg-[#1A2628]
      xl:px-[20px] lg:px-[16px] md:px-[12px]
      font-poppins dark:text-white 
      md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]"
      >
        <p>$</p>
        <input
          type="text"
          className="flex-grow
                    bg-[transparent]
                    border-none
                    font-poppins 
                    md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
                    focus:ring-0
                    focus:border-[#54B3C3] 
                    focus:outline-0"
          onChange={handleChange}
          value={value}
          placeholder="00 000 000"
        />
      </div>
    </div>
  )
}

export default Input
