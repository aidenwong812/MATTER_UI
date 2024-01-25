import { useState } from "react"
import data from "./data.json"
import useIsMobile from "../../../../hooks/useIsMobile"
import Select from "../../../../shared/Select"

const Navbar = () => {
  const [selectItem, setSelectedItem] = useState(data[0].value)
  const isMobile = useIsMobile()
  return (
    <div>
      {isMobile ? (
        <div className="px-[18px] py-[10px] mt-[20px]">
          <p className="text-[12px] leading-[100%] tracking-[-0.3px] text-gray_6 mb-[10px]">
            Service Type
          </p>
          <Select
            value={selectItem}
            onChange={(e) => setSelectedItem(e.target.value)}
            options={data}
          />
        </div>
      ) : (
        <div className="flex justify-between">
          {data.map((item) => (
            <button
              type="button"
              key={item.value}
              className={`py-[20px] px-[24px] flex justify-center items-center
                  cursor-pointer ${
                    item.value === selectItem ? "border-b-[2px] border-b-black" : ""
                  }`}
              onClick={() => setSelectedItem(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Navbar
