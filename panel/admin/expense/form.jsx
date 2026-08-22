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
        placeholder='expensesNumber'
        property='number'
        required
    />
    <Text
        placeholder='expensesExpenseCategory'
        property='expenseCategory'
        required
    />
    <DateTime
        placeholder='expensesExpenseDate'
        property='expenseDate'
        required
    />
    <Numeric
        placeholder='expensesAmount'
        property='amount'
        required
    />
    <Text
        placeholder='expensesCurrency'
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
        placeholder='expensesPaymentMethod'
        property='expensePaymentMethod'
        required
    />
    <LongText
        placeholder='expensesDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
