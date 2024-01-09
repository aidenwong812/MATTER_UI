import { createContext, useContext, useEffect, useMemo, useState } from "react"
import getDefaultFeed from "../lib/getDefaultFeeds"

const CheckOutContext = createContext(null)

const CheckOutProvider = ({ children }) => {
  const [feed, setFeed] = useState([])
  const [selectedDrop, setSelectedDrop] = useState(null)

  const totalPrice = useMemo(() => {
    if (!selectedDrop) return 0
    return parseFloat(selectedDrop?.price) * selectedDrop?.quantity
  }, [selectedDrop])

  const handleChangeQuantity = (value, i) => {
    const temp = [...feed]
    temp[i].quantity = value
    setFeed(temp)
  }

  useEffect(() => {
    const init = async () => {
      const defaultFeed = await getDefaultFeed()
      if (!defaultFeed.length) return

      setFeed(defaultFeed.slice(0, 3).map((feed) => ({
        ...feed,
        quantity: 1
      })))
    }

    init()
  }, [])

  const handleSelectedDrop = (dropAddress, fundsRecipient, price, quantity) => {
    setSelectedDrop({
      dropAddress,
      fundsRecipient,
      price,
      quantity
    })
  }

  const value = useMemo(
    () => ({
      feed,
      handleSelectedDrop,
      selectedDrop,
      totalPrice,
      handleChangeQuantity
    }),
    [
      feed,
      handleSelectedDrop,
      selectedDrop,
      totalPrice,
      handleChangeQuantity
    ],
  )

  return <CheckOutContext.Provider value={value}>{children}</CheckOutContext.Provider>
}

export const useCheckOut = () => {
  const context = useContext(CheckOutContext)
  if (!context) {
    throw new Error("useCheckOut must be used within a CheckOutProvider")
  }
  return context
}

export default CheckOutProvider
