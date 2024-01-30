import { useAccountForm } from "../../providers/AccountProvider"

const EmailForVerify = () => {
  const { isEditableEmail, setIsEditableEmail, emailForVerify, setEmailForVerify } =
    useAccountForm()

  return (
    <div className="flex items-center gap-x-[8px]">
      {isEditableEmail ? (
        <input
          value={emailForVerify}
          onChange={(e) => setEmailForVerify(e.target.value)}
          className="!border-gray_2 rounded-[4px] pl-[5px] p-0 m-0 leading-[100%] tracking-[-0.4px] !w-fit
                !text-gray_6 focus:!ring-0 focus:!boder-gray_2 focus:!outline-none"
        />
      ) : (
        <p className="text-[16px] leading-[100%] tracking-[-0.4px] text-gray_6">{emailForVerify}</p>
      )}
      <button
        type="button"
        onClick={() => setIsEditableEmail(!isEditableEmail)}
        className="text-link text-[16px] leading-[100%] tracking-[-0.4px]"
      >
        {isEditableEmail ? "Done" : "Edit"}
      </button>
    </div>
  )
}

export default EmailForVerify
