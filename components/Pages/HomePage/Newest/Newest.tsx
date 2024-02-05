import NewestList from "../NewestList"

const Newest = () => (
  <div className="pt-[40px] border-t border-gray_3 px-[18px] md:px-0">
    <p className="text-black md:text-gray_8 text-[16px] md:text-[28px] leading-[120%] tracking-[-0.168px] mt-[12px]">
      Newest On Matter
    </p>
    <NewestList />
  </div>
)

export default Newest
