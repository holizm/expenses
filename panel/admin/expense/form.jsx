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
        placeholder='number'
        property='number'
        required
    />
    <Text
        placeholder='expenseCategory'
        property='expenseCategory'
        required
    />
    <DateTime
        placeholder='expenseDate'
        property='expenseDate'
        required
    />
    <Numeric
        placeholder='amount'
        property='amount'
        required
    />
    <Text
        placeholder='currency'
        property='currency'
        required
    />
    <Select
        options={[
            'cash',
            'card',
            'bankTransfer',
            'wallet',
            'other',
        ]}
        placeholder='paymentMethod'
        property='expensePaymentMethod'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
