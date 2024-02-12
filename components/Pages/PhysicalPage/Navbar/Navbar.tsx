import { useMatterMarket } from "@/providers/MatterMarketProvider"
import useIsMobile from "../../../../hooks/useIsMobile"
import Select from "../../../../shared/Select"

const Navbar = () => {
  const { selectedNav, setSelectedNav, categories } = useMatterMarket()
  const isMobile = useIsMobile()
  return (
    <div>
      {isMobile ? (
        <div className="px-[18px] py-[10px] mt-[20px]">
          <p className="text-[12px] leading-[100%] tracking-[-0.3px] text-gray_6 mb-[10px]">
            Physical Product Type
          </p>
          <Select
            value={selectedNav}
            onChange={(e) => setSelectedNav(e.target.value)}
            options={categories}
          />
        </div>
      ) : (
        <div className="flex justify-between">
          {categories.map((item) => (
            <button
              type="button"
              key={item.value}
              className={`p-[20px] flex justify-center items-center
                  cursor-pointer text-gray_6 text-[16px] ${
                    item.value === selectedNav ? "border-b-[2px] border-b-black !text-black" : ""
                  }`}
              onClick={() => setSelectedNav(item.value)}
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
