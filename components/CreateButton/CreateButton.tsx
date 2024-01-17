import Spinner from "../Spinner/Spinner"
import { useDeploy } from "../../providers/DeployProvider"

const CreateButton = () => {
  const buttonCss = `border border-gray_3 rounded-full h-[40px] w-[230px]
  flex gap-x-[5px] justify-center items-center text-[12px]`

  const { creating, buttonLabel } = useDeploy()

  return (
    <button type="submit" className={buttonCss}>
      {creating ? "Creating..." : buttonLabel}
      {creating && <Spinner size={15} />}
    </button>
  )
}

export default CreateButton
