import Content from "../../../Layout/Content"
import Media from "../../../../shared/Media"
import FadeInWhenVisible from "../../../FadeInWhenVisible"
import useIsMobile from "../../../../hooks/useIsMobile"

const SearchInput = ({ setSearchKey, searchKey }) => {
  const isMobile = useIsMobile()

  return (
    <FadeInWhenVisible>
      <Content className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 py-[40px]">
          <pre
            className="text-[12.5px] samsungS8:text-[14.5px] xs:text-[16px]
            md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
            text-[#484848] dark:text-[white]
            font-poppins"
          >
            {isMobile
              ? `Lorem ipsum dolor sit amet, consectetur\nadipiscing elit, sed do eiusmod tempor\nincididunt ut labore et dolore magna aliqua.`
              : `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\neiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          </pre>
          <div
            className="flex justify-center md:justify-end
          pt-[20px] md:pt-0"
          >
            <div className="relative h-fit w-full md:w-fit">
              <div
                className="absolute h-full
                flex items-center
                xl:left-[15px] lg:left-[12px] md:left-[9px] left-[10px]"
              >
                <Media
                  type="image"
                  link="/images/FAQ/search.png"
                  containerClasses="xl:w-[31px] xl:h-[31px]
                    lg:w-[24.8px] lg:h-[24.8px]
                    md:w-[18.6px] md:h-[18.6px]
                    w-[29.92px] h-[29.92px]"
                />
              </div>
              <input
                type="text"
                className="border-gray-300 rounded-[10px] shadow-sm
                text-[#484848] dark:text-white
                font-poppins
                dark:bg-[#10181A]
                xl:w-[383px] xl:h-[54px]
                lg:w-[306.4px] lg:h-[43.2px]
                md:w-[229.8px] md:h-[32.4px]
                w-full
                md:text-[10.8px] lg:text-[14.4px] xl:text-[18px]
                xl:pl-[55px] lg:pl-[44px] md:pl-[33px] pl-[45px]
                placeholder:text-gray-400 dark:placeholder:text-[#484848]
                focus:!border-[#54B3C3] focus:!border-[2px] 
                focus:ring focus:ring-[#54B3C3] focus:ring-opacity-40"
                value={searchKey || ""}
                onChange={(e) => {
                  setSearchKey(e.target.value)
                }}
                placeholder="Search for anything"
              />
            </div>
          </div>
        </div>
      </Content>
    </FadeInWhenVisible>
  )
}

export default SearchInput
