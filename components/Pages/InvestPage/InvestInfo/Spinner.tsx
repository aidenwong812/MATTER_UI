const Spinner = ({ value }) => (
  <div
    className="w-full h-[14px]
      rounded-[15px]
      bg-[#F0ECEC]"
  >
    <div
      className="bg-[#54B3C3]
        h-full rounded-[15px]"
      style={{
        width: `${value}%`,
      }}
    />
  </div>
)

export default Spinner
