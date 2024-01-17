import Icon from "../../../shared/Icon"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import DropList from "./DropList"

const CheckOutSuccessPage = () => (
  <Layout type="base">
    <SeoHead title="Matter | SUCCESS" />
    <div
      className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                        md:px-[24px] lg:px-[32px] xl:px-[40px] pt-[110px]
                        flex flex-col items-center"
    >
      <div className="flex flex-col items-center pb-[32px]">
        <Icon name="simple_check" className="text-success" size={30} />
        <p
          className="text-[28px] font-[400] leading-[110%] tracking-[-0.7px]
                    text-center mt-[20px]"
        >
          Success
        </p>
        <p
          className="text-[16px] font-[400] leading-[100%] tracking-[-0.4px]
                    text-center my-[20px]"
        >
          A confirmation has been emailed to you.
        </p>
        <button
          type="button"
          className="w-[327px] h-[56px] bg-black rounded-full
                                    flex gap-x-[10px] items-center justify-center"
        >
          <p className="text-white text-[16px] font-[400] leading-[120%]">Go to Marketplace</p>
        </button>
      </div>
      <div className="max-w-[1024px] w-full">
        <DropList />
      </div>
    </div>
  </Layout>
)

export default CheckOutSuccessPage
