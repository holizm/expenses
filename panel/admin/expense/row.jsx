import { DateTime } from 'list'

export default item => <>
    <td>{item.title}</td>
    <td>{item.number}</td>
    <DateTime value={item.expenseDate} />
    <td>{item.amount}</td>
    <td>{item.expenseStatus}</td>
</>
