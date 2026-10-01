import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <td>{item.claimant?.title}</td>
    <DateTime value={item.submittedDate} />
    <td>{item.total}</td>
    <td>{item.expenseStatus}</td>
</>
