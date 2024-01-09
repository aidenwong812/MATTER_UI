import Spinner from "../Spinner/Spinner"
import useCreate1155Contract from "../../hooks/useCreate1155Contract"
import { useDeploy } from "../../providers/DeployProvider"
import { CHAIN_ID } from "../../lib/consts"

const CreateButton = () => {
  const buttonLabel = "Create Category"

  const { setPosting, posting } = useDeploy()
  const { create1155Contract } = useCreate1155Contract()

  const post = async () => {
    if (posting) return
    setPosting(true)

    const response: any = await create1155Contract(CHAIN_ID)
    if (response?.error) {
    setPosting(false)
    return
    }
    setPosting(false)
  }

  return (
    <button type="submit" onClick={post}>
      {posting ? "Creating..." : buttonLabel}
      {posting && <Spinner size={15} />}
    </button>
  )
}

export default CreateButton
