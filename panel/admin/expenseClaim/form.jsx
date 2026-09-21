import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='expensesNumber'
        property='number'
        required
    />
    <Text
        placeholder='coreClaimant'
        property='claimant'
        required
    />
    <DateTime
        placeholder='coreSubmittedDate'
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
        placeholder='stateMachinesState'
        property='expenseStatus'
        required
    />
    <LongText
        placeholder='expensesDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
