const getProductSeller = (data) => {
  const fullName =
    data?.customer?.firstName && data?.customer?.lastName
      ? `${data?.customer?.firstName} ${data?.customer?.lastName}`
      : `${data?.customer?.userName || ""}`

  const businessName = data?.business?.businessName

  return businessName || fullName
}

export default getProductSeller
