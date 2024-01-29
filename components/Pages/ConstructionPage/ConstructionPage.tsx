import Image from "../../../shared/Image"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"

const ConstructionPage = ({ pageName = "" }) => (
  <Layout type="base">
    <SeoHead title={`Matter | ${pageName}`} />
    <div
      className="w-screen h-screen flex flex-col px-[18px]
            gap-y-[30px] items-center justify-center"
    >
      <Image
        link="/images/matter_logo.svg"
        blurLink="/images/matter_logo.png"
        containerClasses="w-[250px] md:w-[300px] md:w-[363px] lg:w-[484px] xl:w-[808px] aspect-[121/28]"
        alt="not found"
      />
      <p className="text-[24px] md:text-[32px] font-bold text-center">
        {pageName} page is under contruction.
      </p>
    </div>
  </Layout>
)

export default ConstructionPage
