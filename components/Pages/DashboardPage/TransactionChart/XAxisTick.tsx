const XAxisTick = ({ x, y, data, index }: any) => (
  <g className="duration-700" transform={`translate(${x},${y})`} height={150}>
    <text x="0" y="0" height={120} fill="#A2A3A5" textAnchor="middle">
      <tspan x="0" dy="1.2em" fontSize={12} fontFamily="Poppins">
        {data[index].name}
      </tspan>
    </text>
  </g>
)

export default XAxisTick
