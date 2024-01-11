import { useState } from "react"
import { useCollection } from "../../../providers/CollectionProvider"
import { useDeploy } from "../../../providers/DeployProvider"

const DropsSelect = () => {
  const { selectedDrop, setSelectedDrop, dropItems } = useCollection()
  const { setIsSelectedCreated, isSelectedCreated } = useDeploy()

  const [isOpenDropList, setIsOpenDropList] = useState(false)

  const handleSelect = (value) => {
    setIsSelectedCreated(false)
    setSelectedDrop(dropItems.find((item) => item.value === value))
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      className="relative w-[280px] h-[40px] samsungS8:h-[48px]
    !text-[14px] rounded-md border border-gray_3 cursor-pointer
    flex items-center px-[12px] py-[8px]"
      onClick={() => setIsOpenDropList(!isOpenDropList)}
    >
      {isSelectedCreated ? "Create Collection" : selectedDrop?.label || "Create Collection"}
      {isOpenDropList && (
        <div
          className="absolute w-full left-0 top-[100%]
          py-[4px] border-gray_3 border rounded-md
          bg-white h-[160px] overflow-y-scroll-auto
          flex flex-col items-start gap-y-[2px]"
        >
          <button
            type="button"
            onClick={() => setIsSelectedCreated(true)}
            className="px-[12px] py-[1px] text-left w-full"
          >
            Create Collection
          </button>
          {dropItems?.map((x) => (
            <button
              type="button"
              onClick={() => handleSelect(x.value)}
              key={x.value}
              className="px-[12px] py-[1px] text-left w-full"
            >
              {x.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default DropsSelect
