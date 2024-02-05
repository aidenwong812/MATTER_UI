import ProductItem from "../../ProductItem"

const CuratedProducts = () => (
  <>
    <p
      className="text-[16px] md:text-[28px] leading-[120%] tracking-[-0.168px] 
      text-black md:text-gray_8 text-left pt-[20px]
      border-t border-t-gray_3 px-[18px]"
    >
      Curated by Matter
    </p>
    <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-[40px] mt-[40px] md:px-[18px]">
      <div className="col-span-2 md:col-span-3">
        <ProductItem imageClasses="!aspect-[3/2] md:!h-full !flex-grow" />
      </div>
      <div className="col-span-2 grid grid-cols-2 gap-x-[10px] gap-y-[40px] md:gap-[40px]">
        {Array(4)
          .fill(0)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <ProductItem key={i} />
          ))}
      </div>
    </div>
  </>
)

export default CuratedProducts
