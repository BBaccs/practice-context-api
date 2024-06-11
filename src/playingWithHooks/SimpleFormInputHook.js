import React from 'react';
import useFormState from './hooks/useFormState';

export default function SimpleFormInputHooks() {
    const [ email, updateEmail, resetEmail ] = useFormState("");
    const [ password, updatePassword, clearPassword ] = useFormState("");
  return (
    <div>
        <h1>The email value is { email } </h1>
        <input type="text" value={ email } onChange={ updateEmail } />
        <button onClick={ resetEmail }>reset email</button>
        <input type="text" value={ password } onChange={ updatePassword } />
        <button onClick={ clearPassword }>Clear password</button>
    </div>
  )
}
