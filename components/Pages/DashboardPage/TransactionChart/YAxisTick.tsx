const YAxisTick = ({ y }: any) => (
  <g className="duration-700" transform={`translate(${20},${y - 10})`} height={150}>
    <text x="0" y="0" height={22} fill="#A2A3A5" textAnchor="middle">
      <tspan x="0" dy="1.2em" fontSize={14} fontFamily="Poppins">
        $0.00
      </tspan>
    </text>
  </g>
)

export default YAxisTick
