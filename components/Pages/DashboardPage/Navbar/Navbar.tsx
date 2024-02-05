import data from "../data.json"

const Navbar = ({ selectedTab, setSelectedTab }) => (
  <div
    className="flex justify-between md:justify-start
  md:px-[24px] lg:px-[32px] xl:px-[40px]"
  >
    {data.map((item) => (
      <button
        type="button"
        key={item.value}
        className={`py-[10px] px-[24px] flex justify-center items-center
              cursor-pointer text-gray_6 text-[16px] ${
                item.value === selectedTab ? "border-b-[2px] border-b-black !text-black" : ""
              }`}
        onClick={() => setSelectedTab(item.value)}
      >
        {item.label}
      </button>
    ))}
  </div>
)

export default Navbar
