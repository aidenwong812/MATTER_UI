import { useDeploy } from "../../providers/DeployProvider"

const TitleInput = () => {
  const { setTitle } = useDeploy()

  return (
    <input
      className="bg-cover border-[1px] border-gray_3
            rounded-[8px] focus:!ring-0 focus:!border-gray_3
            w-[280px] h-[40px] samsungS8:h-[48px] pl-4
            flex items-center justify-center"
      type="text"
      placeholder="Enter Product Name..."
      onChange={(e) => setTitle(e.target.value)}
    />
  )
}

export default TitleInput
