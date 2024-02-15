import { useState } from "react"
import { useDashboard } from "@/providers/DashboardProvider"
import Icon from "../../../../../shared/Icon"

const TableFooter = () => {
  const { orders } = useDashboard()

  const lastPageIndex = orders.length
  const [selectedPageIndex, setSelectedPageIndex] = useState(1)

  const nextPage = () => {
    if (selectedPageIndex === lastPageIndex - 2) return
    setSelectedPageIndex(selectedPageIndex + 1)
  }

  const prevPage = () => {
    if (selectedPageIndex === 1) return
    setSelectedPageIndex(selectedPageIndex + -1)
  }

  return (
    <tfoot>
      <tr>
        <td colSpan={4} className="py-[30px]">
          <div className="w-full flex justify-center gap-x-[10px] items-center">
            <button type="button" className="w-[25px] flex items-center" onClick={prevPage}>
              <Icon
                name="riArrowLeft"
                size={25}
                className={`${selectedPageIndex === 1 ? "text-gray_4" : "text-black"}`}
              />
            </button>
            {Array(orders.length)
              .fill(0)
              .map((_, i) => (
                <button
                  className={`rounded-[5px] w-[25px] h-[25px] flex justify-center items-center
                                text-[16px] leading-[16px] ${
                                  i === 0 ? "!bg-black !text-white" : "text-black"
                                }`}
                  onClick={() => setSelectedPageIndex(selectedPageIndex + i)}
                  type="button"
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                >
                  {selectedPageIndex + i}
                </button>
              ))}
            {orders.length > 3 && (
              <>
                <p>...</p>
                <button
                  className={`rounded-[5px] w-[25px] h-[25px] flex justify-center items-center
                                  text-[16px] leading-[16px] `}
                  type="button"
                >
                  {lastPageIndex}
                </button>
              </>
            )}
            <button type="button" className="w-[25px] flex items-center" onClick={nextPage}>
              <Icon
                name="riArrowRight"
                size={25}
                className={`${
                  selectedPageIndex === lastPageIndex - 2 || lastPageIndex <= 3
                    ? "text-gray_4"
                    : "text-black"
                }`}
              />
            </button>
          </div>
        </td>
      </tr>
    </tfoot>
  )
}

export default TableFooter
