import { Formik, FormikHelpers } from "formik";
import React from "react";


export interface IProcessingProps {
    [distinct_id: number]: {
        "checked": boolean,
        "new": number[],
        "update": number[],
        "delete": number[],
    }
}

const initialValues: IProcessingProps = {}


export const ProcessingFormProvider: React.FC<React.PropsWithChildren & {list: number[]}> = ({children, list}) => {
    const onSubmit = (values: IProcessingProps, formikHelpers: FormikHelpers<IProcessingProps>) => {
        console.log(values)
    }

    return <Formik
        initialValues={Object.fromEntries(list.map(num => [num, {
            "checked": false,
        "new": [],
        "update": [],
        "delete": [],
        }])) as IProcessingProps}
        children={children}
        onSubmit={onSubmit}
        ></Formik>
}
