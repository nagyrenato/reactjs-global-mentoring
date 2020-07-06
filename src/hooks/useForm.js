import {useState} from "react";

const useForm = (initialValues) => {
    const [values, setValues] = useState(() => defaultsOnUndefined(initialValues, ""));

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    };

    const resetForm = () => {
        setValues(defaultsOnUndefined(initialValues, ""))
    }

    return [values, handleChange, resetForm];
}


function defaultsOnUndefined(initialValues, defaultValue) {
    for (let property in initialValues) {
        if (initialValues.hasOwnProperty(property)) {
            initialValues[property] = initialValues[property] || defaultValue;
        }
    }
    return initialValues
}

export default useForm