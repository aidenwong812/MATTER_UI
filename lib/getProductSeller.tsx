const getProductSeller = (data) => {
  const businessName = data?.customer?.business?.businessName

  return businessName
}

export default getProductSeller
