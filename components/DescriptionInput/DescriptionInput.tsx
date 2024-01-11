import { useDeploy } from "../../providers/DeployProvider"

const DescriptionInput = () => {
  const { setDescription } = useDeploy()

  return (
    <textarea
      className="bg-cover border-[1px] border-gray_3
            rounded-[8px] focus:!ring-0 focus:!border-gray_3
            w-[280px] pl-4"
      placeholder="Enter Description..."
      rows={2}
      onChange={(e) => setDescription(e.target.value)}
    />
  )
}

export default DescriptionInput
