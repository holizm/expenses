import {
    DateTime,
    DialogForm,
    LongText,
    Numeric,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        number
        required
    />
    <Text
        expenseCategory
        required
    />
    <DateTime
        expenseDate
        required
    />
    <Numeric
        amount
        required
    />
    <Text
        currency
        required
    />
    <Select
        expensePaymentMethod
        options={[
            'cash',
            'card',
            'bankTransfer',
            'wallet',
            'other',
        ]}
        placeholder='paymentMethod'
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
