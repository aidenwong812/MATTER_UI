import { useRouter } from "next/router"
import Icon from "../../shared/Icon"

const EditAccountButton = () => {
  const router = useRouter()

  return (
    <button
      type="button"
      className="md:ml-[24px] rounded-full
            py-[5px] px-[20px]"
      onClick={() => router.push("/account")}
    >
      <Icon name="user" />
    </button>
  )
}

export default EditAccountButton
