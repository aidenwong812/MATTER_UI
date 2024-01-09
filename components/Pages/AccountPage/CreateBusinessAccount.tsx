import Image from "../../../shared/Image"

const CreateBusinessAccount = () => (
  <div
    className="w-full md:w-[375px] shadow-gray_shadow rounded-[10px]
        py-[40px] px-[26px] flex flex-col items-center"
  >
    <div className="flex gap-x-[10px] items-center">
      <Image
        link="/images/oasis_black.svg"
        blurLink="/images/oasis_black.png"
        containerClasses="w-[18px] aspect-[18/14]"
        alt="not found icon"
      />
      <p className="tracking-[6px] font-[400] text-[12px] leading-[120%]">Business</p>
    </div>
    <p
      className="text-[28px] font-[400] leading-[110%] tracking-[-0.7px]
            my-[24px]"
    >
      Want to sell on Oasis?
    </p>
    <button
      type="button"
      className="border border-gray_2 rounded-full
                        py-[10px] px-[20px]"
    >
      Create a Business Account
    </button>
  </div>
)

export default CreateBusinessAccount
