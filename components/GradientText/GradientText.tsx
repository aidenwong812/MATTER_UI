const GradientText = ({ className = "", children }) => (
  <span
    className={`bg-gradient-[90deg]
          bg-gradient-to-r from-[#000] to-[#9A9A9A]
          from-[1.67%] to-[83.98%]
          bg-clip-text	text-[#00000000]
          leading-[110%] tracking-[-1.75] overflow-visible
          ${className}`}
  >
    {children}
  </span>
)

export default GradientText
