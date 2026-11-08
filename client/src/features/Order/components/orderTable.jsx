import { Table, TableHeader } from "@/components"
import { orderColumns } from "../constants/column"
const OrderTable = () => {
  return (
    <Table>
      <TableHeader columns={orderColumns}/>
    </Table>
  )
}

export default OrderTable
