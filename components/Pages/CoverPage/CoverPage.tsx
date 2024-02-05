import useIsMobile from "../../../hooks/useIsMobile"
import Image from "../../../shared/Image"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"

const CoverPage = () => {
  const isMobile = useIsMobile()
  return (
    <Layout type="base">
      <SeoHead />
      <div
        className="xl:w-[1440px] lg:w-[1280px] md:w-[1024px] h-screen  
              flex items-center justify-around"
      >
        {!isMobile && (
          <div>
            <p className="font-bold md:text-[48px] lg:text-[64px] xl:text-[80px] leading-[100%]">
              Matter
            </p>
            <p className="md:text-[18px] lg:text-[24px] xl:text-[30px] text-gray_6">Web Platform</p>
          </div>
        )}
        <Image
          link="/images/matter_logo.svg"
          blurLink="/images/matter_logo.png"
          containerClasses="w-[300px] md:w-[363px] lg:w-[484px] xl:w-[808px] aspect-[121/28]"
          alt="not found"
        />
      </div>
    </Layout>
  )
}

export default CoverPage
