import { useDeploy } from "../../../providers/DeployProvider"
import Form from "../../../shared/Form"
import Input from "../../../shared/Input"
import { validation } from "../../../utils/create-form-validation"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Spinner from "../../Spinner/Spinner"
import AnimationUpload from "./AnimationUpload"

const CreatePage = () => {
  const { title, setTitle, description, setDescription, creating, create } = useDeploy()

  return (
    <Layout type="base">
      <SeoHead title="Matter | Create" />
      <div
        className="w-full xl:w-[1440px] lg:w-[1280px] md:w-[1024px] min-h-screen
                        md:px-[24px] lg:px-[32px] xl:px-[40px] pt-[90px] pb-[30px] px-[18px]
                        flex items-center justify-center"
      >
        <Form
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-[40px]"
          validationSchema={validation}
          onSubmit={create}
        >
          <div className="flex flex-col gap-y-[20px] items-center md:items-end h-full">
            <AnimationUpload />
          </div>
          <div
            className="flex flex-col items-center md:items-start gap-y-[20px]
          max-w-[280px]"
          >
            <p className="text-[22px]">Create</p>
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Product Name..."
              id="title"
              name="title"
              hookToForm
            />
            <Input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter Description..."
              id="description"
              name="description"
              hookToForm
            />
            <button
              type="submit"
              className="border border-gray_3 rounded-full h-[40px] w-[230px]
              flex gap-x-[5px] justify-center items-center text-[12px]"
            >
              {creating ? "Creating..." : "Create"}
              {creating && <Spinner size={15} />}
            </button>
          </div>
        </Form>
      </div>
    </Layout>
  )
}

export default CreatePage
