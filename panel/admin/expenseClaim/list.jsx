import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const headers = <>
    <th start>expensesNumber</th>
    <th>expensesClaimant</th>
    <th>expensesSubmittedDate</th>
    <th>expensesTotal</th>
    <th>expensesStatus</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <td>{item.claimant?.title}</td>
    <DateTime value={item.submittedDate} />
    <td>{item.total}</td>
    <td>{item.expenseStatus}</td>
</>

export default <List
    create={Form}
    filters={<Text property='number' />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
