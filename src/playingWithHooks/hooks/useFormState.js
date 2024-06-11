import { useState } from 'react';

export default initialVal => {
    const [ value , setValue ] = useState(initialVal);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [ value, handleChange, reset ];
};


// Example of using in another file
// const [ age, handleAgeChange, resetAge ]; = useFormState('');