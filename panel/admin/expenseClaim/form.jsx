import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <Text
        claimant
        required
    />
    <DateTime
        required
        submittedDate
    />
    <Select
        expenseStatus
        options={[
            'draft',
            'submitted',
            'approved',
            'rejected',
            'paid',
            'reimbursed',
            'cancelled',
        ]}
        placeholder='state'
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
