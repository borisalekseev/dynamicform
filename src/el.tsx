import { useFormikContext, Field, FieldProps } from "formik"
import { IProcessingProps } from "./provider"
import React from "react"
import { Form } from "react-bootstrap"

const Input: React.FC<{changeFormik: (e: React.ChangeEvent<{value: string}>) => void, inputName: string}> = ({changeFormik, inputName}) => {
    const [value, setValue] = React.useState<string>("")
    const onChange = (e: React.ChangeEvent<{value: string}>) => {
        setValue(e.target.value)
        changeFormik(e)
    }
    return (
        <Form.Control value={value} onChange={onChange} name={inputName}/>
    )
}

export const Element: React.FC<{distinct_id: number}> = ({distinct_id}) => {
    const formik = useFormikContext<IProcessingProps>()
    return <p>{distinct_id}
    <Field type="checkbox" name={`${distinct_id}.checked`} />
    <Field name={`${distinct_id}.new.0`}>
        {
            ({ field, form, meta }: FieldProps<number, IProcessingProps>) =>
            <Input changeFormik={field.onChange} inputName={`${distinct_id}.new`} />
        }
    </Field>
    </p>
}