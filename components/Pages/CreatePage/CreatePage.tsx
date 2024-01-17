import { useCollection } from "../../../providers/CollectionProvider"
import { useDeploy } from "../../../providers/DeployProvider"
import Form from "../../../shared/Form"
import Input from "../../../shared/Input"
import TextArea from "../../../shared/TextArea"
import CreateButton from "../../CreateButton"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import AnimationUpload from "./AnimationUpload"
import DropsSelect from "./DropsSelect"
import { validation } from "./validations"

const CreatePage = () => {
  const {
    cover,
    animationFile,
    isSelectedCreated,
    setTitle,
    title,
    setDescription,
    description,
    create,
  } = useDeploy()
  const { drops1155 } = useCollection()
  const coverUrl = cover && URL.createObjectURL(cover)
  const hasContent = cover || animationFile

  return (
    <Layout type="base">
      <SeoHead title="Matter | Account" />
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
          <Form
            className="flex flex-col items-center md:items-start gap-y-[20px]"
            validationSchema={validation}
            onSubmit={create}
          >
            <p className="text-[22px]">
              {drops1155.length > 0 && !isSelectedCreated ? "Create a Product" : "Create Category"}
            </p>
            {drops1155.length > 0 && <DropsSelect />}
            <Input
              name="title"
              id="title"
              value={title}
              className="!w-[280px]"
              onChange={(e) => setTitle(e.target.value)}
              placeholder={
                drops1155?.length && !isSelectedCreated
                  ? "Enter Product Name..."
                  : "Enter Category Name..."
              }
              hookToForm
            />
            <TextArea
              name="description"
              id="description"
              rows={4}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description..."
              className="!w-[280px]"
              value={description}
              hookToForm
            />
            <CreateButton />
          </Form>
        </div>
      </div>
    </Layout>
  )
}

export default CreatePage
