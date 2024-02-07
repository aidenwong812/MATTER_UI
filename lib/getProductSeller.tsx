const getProductSeller = (data) => {
  const fullName =
    data?.customer?.firstName && data?.customer?.lastName
      ? `${data?.customer?.firstName} ${data?.customer?.lastName}`
      : `${data?.customer?.userName || ""}`

  return fullName
}

export default getProductSeller
