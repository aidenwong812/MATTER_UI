import { useState } from "react"
import Button from "../../../shared/Button"
import ReceiveKitModal from "../../ReceiveKitModal"

const JoinForKit = () => {
  const [openReceiveKitModal, setOpenReceiveKitModal] = useState(false)

  return (
    <>
      <div className="flex flex-col pl-[50px] col-span-3">
        <p
          className="text-[#54B3C3] font-poppins_bold
        md:text-[12px] lg:text-[16px] xl:text-[20px]
        pb-[15px]"
        >
          Information Kit
        </p>
        <Button
          id="join_team"
          className="xl:w-[368px] xl:h-[47px]
                    lg:w-[294.4px] lg:h-[37.6px]
                    md:w-[220.8px] md:h-[28.2px]
                    bg-[#54B3C3]
                    xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
                    font-poppins_semibold
                    text-white"
          onClick={() => setOpenReceiveKitModal(true)}
        >
          Receive your information kit today!
        </Button>
        <pre
          className="text-[#ffffffcc] font-poppins
        xl:text-[16px] lg:text-[12.8px] md:text-[9.6px]
        pt-[20px]"
        >{`Join our community to receive your\ninformation kit`}</pre>
      </div>
      <ReceiveKitModal
        toggleIsVisible={() => setOpenReceiveKitModal(!openReceiveKitModal)}
        isModalVisible={openReceiveKitModal}
      />
    </>
  )
}

export default JoinForKit
