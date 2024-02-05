import TableRow from "../TableRow"

const TableBody = () => (
  <tbody>
    {Array(20)
      .fill(0)
      .map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <TableRow key={i} />
      ))}
  </tbody>
)

export default TableBody
