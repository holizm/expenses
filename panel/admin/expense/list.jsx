import {
    DateTime,
    List,
    Text,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>expensesExpense</th>
    <th>expensesNumber</th>
    <th>expensesExpenseDate</th>
    <th>expensesAmount</th>
    <th>expensesStatus</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.number}</td>
    <DateTime value={item.expenseDate} />
    <td>{item.amount}</td>
    <td>{item.expenseStatus}</td>
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
