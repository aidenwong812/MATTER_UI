import { toast } from "react-toastify"
import { useRouter } from "next/router"
import Spinner from "../Spinner/Spinner"
import { useCollection } from "../../providers/CollectionProvider"
import useCreate1155Token from "../../hooks/useCreate1155Token"
import useCreate1155Contract from "../../hooks/useCreate1155Contract"
import { useDeploy } from "../../providers/DeployProvider"
import { CHAIN_ID } from "../../lib/consts"

const CreateButton = () => {
  const router = useRouter()
  const buttonCss = `border border-gray_3 rounded-full h-[40px] w-[230px]
  flex gap-x-[5px] justify-center items-center text-[12px]`
  const { drops1155, fetch1155Drops, selectedDrop } = useCollection()
  const { setPosting, posting, title, description, isSelectedCreated } = useDeploy()
  const { create1155Token } = useCreate1155Token()
  const { create1155Contract } = useCreate1155Contract()

  const buttonLabel = drops1155.length && !isSelectedCreated ? "Create Product" : "Create Category"

  const storyAddress = selectedDrop?.value

  const post = async () => {
    if (posting) return

    setPosting(true)
    if (drops1155?.length && !isSelectedCreated) {
      if (!storyAddress) {
        toast.error("Please, select a collection!")
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

      const response: any = await create1155Token(CHAIN_ID)

      if (response?.error) {
        setPosting(false)
        return
      }
    } else {
      const response: any = await create1155Contract(CHAIN_ID)
      if (response?.error) {
        setPosting(false)
        return
      }
    }
    await fetch1155Drops()
    router.push("/checkout")
    setPosting(false)
  }

  return (
    <button type="submit" onClick={post} className={buttonCss}>
      {posting ? "Creating..." : buttonLabel}
      {posting && <Spinner size={15} />}
    </button>
  )
}

export default CreateButton
