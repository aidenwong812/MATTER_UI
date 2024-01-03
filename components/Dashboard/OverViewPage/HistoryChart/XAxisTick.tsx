import _ from "lodash"
import data from "./mockHistory.json"

const XAxisTick = (props) => {
  const { x, y, payload } = props

  return (
    <g className="duration-700" transform={`translate(${x},${y})`} height={150}>
      <text x="0" y="0" height={120} fill="white" textAnchor="middle">
        <tspan x="0" dy="1.2em" className="text-[8px] md:text-[12px]">
          {data[_.get(payload, "value")]?.xname}
        </tspan>
      </text>
    </g>
  )
}

export default XAxisTick
