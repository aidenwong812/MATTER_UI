import Layout from "../../Layout"
import DistributeButton from "../../Buttons/DistributeButton"
import { useDistributeProvider } from "../../../providers/DistributeProvider"
import DistributeTxModal from "../../Modals/DistributeTxModal"
import DistributeInput from "./DistributeInput"

const DistributePage = () => {
  const { step } = useDistributeProvider()

  return (
    <Layout type="full">
      <div className="flex flex-col items-center justify-center h-screen p-8 space-y-4 md:space-y-6">
        <DistributeInput />
        <DistributeButton />
        {step > 0 && <DistributeTxModal />}
      </div>
    </Layout>
  )
}

export default DistributePage
