import { XAxis, YAxis, ResponsiveContainer, Line, LineChart } from "recharts"

import { useMediaQuery } from "usehooks-ts"
import data from "./mockHistory.json"
import XAxisTick from "./XAxisTick"
import YAxisTick from "./YAxisTick"

const HistoryChart = () => {
  const isMacbook = useMediaQuery("(max-width: 1024px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isSamsungS8 = useMediaQuery("(max-width: 360px)")

  return (
    // eslint-disable-next-line no-nested-ternary
    <ResponsiveContainer
      width="100%"
      // eslint-disable-next-line no-nested-ternary
      height={isMobile ? (isSamsungS8 ? 200 : 280) : isMacbook ? 330 : 425}
    >
      <LineChart
        // eslint-disable-next-line no-nested-ternary
        height={isMobile ? (isSamsungS8 ? 320 : 280) : isMacbook ? 330 : 425}
        data={data}
        margin={{ top: 5, right: 10, bottom: 5, left: -15 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#8960FF" dot={null} activeDot={null} />
        <Line type="monotone" dataKey="pv" stroke="#29E5FF" dot={null} activeDot={null} />
        <XAxis interval={0} axisLine tickLine stroke="#655B96" tick={<XAxisTick />} />
        <YAxis
          domain={[0, 1000]}
          interval={0}
          tickCount={12}
          axisLine
          tick={<YAxisTick />}
          tickLine
          stroke="#655B96"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default HistoryChart
