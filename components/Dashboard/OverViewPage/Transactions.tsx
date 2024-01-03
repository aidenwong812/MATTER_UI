import { useMemo } from "react"
import { ColumnDef } from "@tanstack/react-table"
import Table from "./Table"
import mockData from "./Table/mockData.json"

type Item = {
  date: number
  transactionId: any
  activity: any
  description: any
  value: any
}

const Transactions = () => {
  const cols = useMemo<ColumnDef<Item>[]>(
    () => [
      {
        header: "Date",
        footer: (props) => props.column.id,
        cell: (row) => row.getValue(),
        accessorKey: "date",
      },
      {
        header: "Transaction ID",
        footer: (props) => props.column.id,
        cell: (row) => row.getValue(),
        accessorKey: "transactionId",
      },
      {
        header: "Activity",
        footer: (props) => props.column.id,
        cell: (row) => row.getValue(),
        accessorKey: "activity",
      },
      {
        header: "Description",
        footer: (props) => props.column.id,
        cell: (row) => row.getValue(),
        accessorKey: "description",
      },
      {
        header: "Value",
        footer: (props) => props.column.id,
        cell: (row) => row.getValue(),
        accessorKey: "value",
      },
    ],
    [],
  )

  const formattedTableData = () => {
    const items = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < mockData.length; i++) {
      items.push({
        date: (
          <p
            className="text-white
        text-[6.5px] samsungS8:text-[7.3px] xs:text-[8px] md:text-[18px]
        text-left"
          >
            {mockData[i].date}
          </p>
        ),
        transactionId: (
          <p
            className="text-white 
          text-[6.5px] samsungS8:text-[7.3px] xs:text-[8px] md:text-[18px]
          text-left"
          >
            {mockData[i].transactionId}
          </p>
        ),
        activity: (
          <p
            className="text-white 
        text-[6.5px] samsungS8:text-[7.3px] xs:text-[8px] md:text-[18px]
        text-left"
          >
            {mockData[i].activity}
          </p>
        ),
        description: (
          <p
            className="text-white 
        text-[6.5px] samsungS8:text-[7.3px] xs:text-[8px] md:text-[18px]
        text-left"
          >
            {mockData[i].description}
          </p>
        ),
        value: (
          <p
            className="text-white 
        text-[6.5px] samsungS8:text-[7.3px] xs:text-[8px] md:text-[18px]
        text-left"
          >
            {mockData[i].value}
          </p>
        ),
      })
    }
    return items
  }

  return (
    <div
      className="w-full
        bg-[#919cc126] md:bg-[#277e9326]
        border-[1px] border-white md:border-[#ffffff1a]
        rounded-[15px]
        flex flex-col 
        p-[20px] md:p-[30px] lg:p-[40px] xl:p-[50px]
        mt-[20px] md:mt-[30px] lg:mt-[40px] xl:mt-[50px]"
    >
      <p
        className="font-poppins_bold
       text-[8.25px] samsungS8:text-[11px] xs:text-[12px] md:text-[19.2px] xl:text-[24px]
       text-white pb-[15px]"
      >
        Transactions
      </p>
      <Table data={formattedTableData()} columns={cols} />
    </div>
  )
}

export default Transactions
