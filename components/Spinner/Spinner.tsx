import { motion } from "framer-motion"
import Zorb from "../Zorb"
import useConnectedWallet from "../../hooks/useConnectedWallet"

const Spinner = ({ size = 50, address = "" }) => {
  const { connectedWallet } = useConnectedWallet()

  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "linear",
      }}
    >
      <Zorb
        address={address || connectedWallet || process.env.NEXT_PUBLIC_CREATE_REFERRAL}
        size={size}
      />
    </motion.div>
  )
}

export default Spinner
