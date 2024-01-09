import { useDeploy } from "../../../providers/DeployProvider"
import Image from "../../../shared/Image"
import CreateButton from "../../CreateButton"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import AnimationUpload from "./AnimationUpload"

const CreatePage = () => {
    const { cover, animationFile, animationSrc } = useDeploy()
  
    const coverUrl = cover && URL.createObjectURL(cover)
    const hasContent = cover || animationFile

    return (
        <Layout type="base">
        <SeoHead title="OASIS | Account" />
            <div
                className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                        md:px-[24px] lg:px-[32px] xl:px-[40px] pt-[90px] pb-[30px] px-[18px]
                        flex flex-col items-center justify-center gap-y-[10px]">
                <p className="font-monument_extended_ultrabold text-[22px] text-center">
                    Create Category
                </p>
                {!hasContent && <AnimationUpload />}
                {cover && (
                    <Image
                    link={coverUrl}
                    blurLink={coverUrl}
                    containerClasses="w-[280px] aspect-[280/150] samsungS8:aspect-[1/1]"
                    alt="not found photo"
                    />
                )}
                <CreateButton />
            </div>
       </Layout>
    )
}

export default CreatePage