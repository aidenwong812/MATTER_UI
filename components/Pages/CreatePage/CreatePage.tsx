import { useDeploy } from "../../../providers/DeployProvider"
import Form from "../../../shared/Form"
import Input from "../../../shared/Input"
import Select from "../../../shared/Select"
import { validation } from "../../../utils/create-form-validation"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Spinner from "../../Spinner/Spinner"
import AnimationUpload from "./AnimationUpload"

const productTypes = [
  {
    label: "Physical Product",
    value: "Physical",
  },
  {
    label: "Digital Product",
    value: "Digital",
  },
  {
    label: "Service",
    value: "Service",
  },
]

const serviceCategories = [
  { label: "Transportation", value: "Transportation" },
  { label: "Medical", value: "Medical" },
  { label: "Home Repair", value: "HomeRepair" },
  { label: "Food", value: "Food" },
  { label: "Automotive", value: "Automotive" },
  { label: "Beauty", value: "Beauty" },
  { label: "Technology", value: "Technology" },
  { label: "Pet", value: "Pet" },
  { label: "Marketing", value: "Marketing" },
  { label: "Other", value: "OtherService" },
]

const digitalCategories = [
  { label: "Music", value: "Music" },
  { label: "Ebooks", value: "Ebooks" },
  { label: "Video Games", value: "VideoGames" },
  { label: "Apps", value: "Apps" },
  { label: "Movies & TV", value: "MoviesTV" },
  { label: "Art", value: "Art" },
  { label: "Courses", value: "Courses" },
  { label: "Tickets", value: "Tickets" },
  { label: "Collectibles", value: "Collectibles" },
  { label: "Other", value: "OtherDigital" },
]

const physicalCategories = [
  { label: "Apparel", value: "Apparel" },
  { label: "Home & Kitchen", value: "HomeKitchen" },
  { label: "Furniture", value: "Furniture" },
  { label: "Toys & Games", value: "ToysGames" },
  { label: "Beauty", value: "Beauty" },
  { label: "Books", value: "Books" },
  { label: "Jewelry & Watches", value: "JewelryWatches" },
  { label: "Pet Supplies", value: "PetSupplies" },
  { label: "Other", value: "OtherPhysical" },
]

const CreatePage = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    creating,
    create,
    productType,
    setProductType,
    productCategory,
    setProductCategory,
  } = useDeploy()

  const getCategoryOptions = (type) => {
    switch (type) {
      case "Physical":
        return physicalCategories
      case "Digital":
        return digitalCategories
      case "Service":
        return serviceCategories
      default:
        return []
    }
  }

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
            <div>
              Listing image or video.
              <AnimationUpload />
            </div>

            {productType === "Digital" && (
              <div>
                <p>Upload the content your customer</p>
                <p>will receive upon purchase.</p>
                <AnimationUpload />
              </div>
            )}
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
            <Select
              id="product_type"
              name="product_type"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              options={productTypes}
              hookToForm
            />
            <Select
              id="product_category"
              name="product_category"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              options={getCategoryOptions(productType)}
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
