import React, {useState, useEffect} from 'react';


const useValidation = (initialState, validate, fn) => {

    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [submitForm, setSubmitForm] = useState(false);

    useEffect(() => {
        if (submitForm) {
            const noErrors = Object.keys(errors).length===0;
            if (noErrors) {
                fn();
            }
            setSubmitForm(false);
        }
    }, [errors])


    const handleChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        const errorsValidating = validate(values);
        setErrors(errorsValidating);
        setSubmitForm(true);
    }

    return {
        values,
        errors,
        submitForm,
        handleSubmit,
        handleChange
    }
}

export default useValidation;