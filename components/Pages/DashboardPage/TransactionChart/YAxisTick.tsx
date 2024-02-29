const YAxisTick = ({ y, data, index, visibleTicksCount }: any) => {
  if (data === -Infinity) {
    return <g />
  }

  let value = 0
  if (index !== 0) {
    value = (data / visibleTicksCount) * index
  }
  if (index === visibleTicksCount - 1) {
    value = data
  }
  return (
    <g className="duration-700" transform={`translate(${55},${y - 10})`} height={150}>
      <text x="0" y="0" height={22} fill="#A2A3A5" textAnchor="middle">
        <tspan x="0" dy="1.2em" fontSize={12} fontFamily="Poppins">
          {`$${value}`}
        </tspan>
      </text>
    </g>
  )
}

export default YAxisTick
