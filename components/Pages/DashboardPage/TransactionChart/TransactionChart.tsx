import { AreaChart, Area, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { useMeasure } from "react-use"
import { chartData } from "./data"
import XAxisTick from "./XAxisTick"
import YAxisTick from "./YAxisTick"

const TransactionChart = () => {
  const [containerRef, { height }] = useMeasure()

  return (
    <div className="h-[300px] w-full mt-[20px]" ref={containerRef}>
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart
          height={height - 40}
          data={chartData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <defs>
            <linearGradient id="color-gradient-uv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#CFF2D8" />
              <stop offset="141.68%" stopColor="#ffffff00" />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#CFF2D8"
            strokeWidth={2}
            dot={null}
            fill="url(#color-gradient-uv)"
          />
          <CartesianGrid stroke="#ECE9F1" vertical={false} />
          <XAxis
            interval={0}
            axisLine={false}
            tick={<XAxisTick data={chartData} />}
            tickLine={false}
          />
          <YAxis
            tickCount={4}
            domain={[0, 300]}
            interval={0}
            tickMargin={0}
            padding={{ top: 0, bottom: 0 }}
            axisLine={false}
            tickLine={false}
            tick={<YAxisTick data={chartData} />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TransactionChart
