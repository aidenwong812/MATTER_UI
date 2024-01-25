import { useRouter } from "next/router"
import Icon from "../../shared/Icon"

const EditAccountButton = () => {
  const { push } = useRouter()

  return (
    <button
      type="button"
      className="md:ml-[24px] rounded-full
            py-[5px] px-[20px]"
      onClick={() => push("/account")}
    >
      <Icon name="user" />
    </button>
  )
}

export default EditAccountButton
