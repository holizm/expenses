import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='claimant'
        property='claimant'
        required
    />
    <DateTime
        placeholder='submittedDate'
        property='submittedDate'
        required
    />
    <Select
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
        property='expenseStatus'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
