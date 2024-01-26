import { useDeploy } from "../../../providers/DeployProvider"
import CreateButton from "../../CreateButton"
import DescriptionInput from "../../DescriptionInput"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import TitleInput from "../../TitleInput/TitleInput"
import AnimationUpload from "./AnimationUpload"

const CreatePage = () => {
  const { cover, animationFile } = useDeploy()

  const coverUrl = cover && URL.createObjectURL(cover)
  const hasContent = cover || animationFile

  return (
    <Layout type="base">
      <SeoHead title="Matter | Create" />
      <div
        className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                        md:px-[24px] lg:px-[32px] xl:px-[40px] pt-[90px] pb-[30px] px-[18px]
                        flex items-center justify-center"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[40px]">
          <div className="flex flex-col gap-y-[20px] items-center md:items-end h-full">
            {!hasContent && <AnimationUpload />}
            {/* eslint-disable-next-line  @next/next/no-img-element */}
            {cover && <img src={coverUrl} width={280} height={150} alt="not found uri" />}
          </div>
          <div className="flex flex-col items-center md:items-start gap-y-[20px]">
            <p className="text-[22px]">Create</p>
            <TitleInput />
            <DescriptionInput />
            <CreateButton />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreatePage
