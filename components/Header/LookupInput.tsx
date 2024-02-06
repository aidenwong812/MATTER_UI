import useIsMobile from "../../hooks/useIsMobile"
import useLookup from "../../hooks/useLookup"
import Icon from "../../shared/Icon"

const LookupInput = () => {
  const isMobile = useIsMobile()
  const { searchKey, setSearchKey, filters, isVisible, setIsVisible } = useLookup()

  return (
    <div>
      {!isMobile && (
        <div className="flex items-center gap-x-[5px] relative">
          <Icon name="search" className="text-gray_8" size={24} />
          <input
            type="text"
            placeholder="Find Stuff..."
            className="border-none focus:ring-0 px-1"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            onFocus={() => setIsVisible(true)}
            onBlur={() => setIsVisible(false)}
          />
          {filters.length > 0 && isVisible && (
            <div
              className="absolute top-full left-0
              bg-white border border-gray_3 w-full p-[10px] rounded-[5px] max-h-[200px]
              overflow-y-auto"
            >
              {filters.map((data) => (
                <p className="cursor-pointer" key={data.id}>
                  {data?.title || data?.businessName}
                </p>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default LookupInput
