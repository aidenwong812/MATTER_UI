import { useState } from "react"
import data from "./data.json"

const Navbar = () => {
  const [selectItem, setSelectedItem] = useState(data[0].value)
  return (
    <div className="flex justify-between md:justify-start">
      {data.map((item) => (
        <button
          type="button"
          key={item.value}
          className={`py-[20px] px-[24px] flex justify-center items-center
              cursor-pointer text-gray_6 text-[16px] ${
                item.value === selectItem ? "border-b-[2px] border-b-black !text-black" : ""
              }`}
          onClick={() => setSelectedItem(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default Navbar
