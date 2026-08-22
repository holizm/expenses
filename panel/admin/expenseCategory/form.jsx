import {
    DialogForm,
    LongText,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='expensesCode'
        property='code'
        required
    />
    <LongText
        placeholder='expensesDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
