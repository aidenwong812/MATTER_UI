const YAxisTick = (props) => {
  const { payload, y } = props

  return (
    <>
      {/* // eslint-disable-next-line react/jsx-no-unless-fragment */}
      {payload.value !== 0 && payload.value !== 1100 && (
        <g className="duration-700" transform={`translate(0,${y})`}>
          <text x="0" y="0" fill="transparent" textAnchor="middle">
            <tspan x="15px" dy="0.5em" className="text-[8px] md:text-[12px]" fill="white">
              {payload.value / 10} K
            </tspan>
          </text>
        </g>
      )}
    </>
  )
}

export default YAxisTick
