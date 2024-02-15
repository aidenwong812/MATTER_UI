const getBigNumberString = (ethPrice) => (parseFloat(ethPrice) * 10 ** 18).toString()

export default getBigNumberString
