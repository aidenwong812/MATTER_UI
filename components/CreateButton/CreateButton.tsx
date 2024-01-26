import { toast } from "react-toastify"
import { useRouter } from "next/router"
import Spinner from "../Spinner/Spinner"
import useCreate1155Contract from "../../hooks/useCreate1155Contract"
import { useDeploy } from "../../providers/DeployProvider"
import { CHAIN_ID } from "../../lib/consts"

const CreateButton = () => {
  const router = useRouter()
  const buttonCss = `border border-gray_3 rounded-full h-[40px] w-[230px]
  flex gap-x-[5px] justify-center items-center text-[12px]`
  const { setPosting, posting, title, description, cover } = useDeploy()
  const { create1155Contract } = useCreate1155Contract()

  const post = async () => {
    if (posting) return
    if (!cover) {
      toast.error("Please, upload media!")
      setPosting(false)
      return
    }
    if (!title) {
      toast.error("Please, enter a title!")
      setPosting(false)
      return
    }
    if (!description) {
      toast.error("Please, enter a description!")
      setPosting(false)
      return
    }
    setPosting(true)
    const response: any = await create1155Contract(CHAIN_ID)
    if (response?.error) {
      setPosting(false)
      return
    }
    router.push("/checkout")
    setPosting(false)
  }

  return (
    <button type="submit" onClick={post} className={buttonCss}>
      {posting ? "Creating..." : "Create"}
      {posting && <Spinner size={15} />}
    </button>
  )
}

export default CreateButton
