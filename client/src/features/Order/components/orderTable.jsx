import { Table, TableHeader } from "@/components"
import { orderColumns } from "../constants/column"
const OrderTable = () => {
  return (
    <Table>
      <TableHeader columns={orderColumns}/>
      Order Table
    </Table>
  )
}

export default OrderTable
