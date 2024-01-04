import DropItem from "./DropItem"

const DropList = () => (
  <div className="md:col-span-6 xl:col-span-8">
    <div
      className="w-full flex flex-col gap-y-[24px]
              border-t border-t-gray_3 pt-[24px]"
    >
      {Array(3)
        .fill("0")
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <DropItem key={i} />
        ))}
    </div>
  </div>
)

export default DropList
