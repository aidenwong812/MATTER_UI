import { motion } from "framer-motion"
import Zorb from "../Zorb"
import { useUserProvider } from "../../providers/UserProvider"

const Spinner = ({ size = 50, address = "" }) => {
  const { connectedWallet } = useUserProvider()

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
