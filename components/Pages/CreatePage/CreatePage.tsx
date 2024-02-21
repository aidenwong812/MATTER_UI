import { useDeploy } from "../../../providers/DeployProvider"
import Form from "../../../shared/Form"
import Input from "../../../shared/Input"
import Select from "../../../shared/Select"
import { validation } from "../../../lib/validations/create-form-validation"
import Layout from "../../Layout"
import SeoHead from "../../SeoHead"
import Spinner from "../../Spinner/Spinner"
import AnimationUpload from "./AnimationUpload"
import { productTypes } from "../../../lib/consts"
import ContentUpload from "./ContentUpload"
import TextArea from "../../../shared/TextArea"

const CreatePage = () => {
  const {
    productName,
    setProductName,
    productDescription,
    setProductDescription,
    creating,
    create,
    productType,
    setProductType,
    productCategory,
    setProductCategory,
    priceInUsd,
    setPriceInUsd,
    totalSupply,
    setTotalSupply,
    getCategoryOptions,
  } = useDeploy()

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
                <ContentUpload />
              </div>
            )}
          </div>
          <div
            className="flex flex-col items-center md:items-start gap-y-[20px]
          max-w-[280px]"
          >
            <p className="text-[22px]">Create</p>
            <Input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter Listing Name..."
              id="product_name"
              name="product_name"
              hookToForm
            />
            <TextArea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Enter Description..."
              id="product_description"
              name="product_description"
              hookToForm
            />
            <Input
              value={priceInUsd}
              onChange={(e) => setPriceInUsd(e.target.value)}
              placeholder="Enter USD price..."
              id="price"
              name="price"
              type="number"
              hookToForm
            />
            <Input
              value={totalSupply}
              onChange={(e) => setTotalSupply(e.target.value)}
              placeholder="Enter total supply..."
              id="total_supply"
              name="total_supply"
              type="number"
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
