import React, { useState } from  'react';
    
    
const MovieForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [firstnameError, setfirstnameError] = useState("");

    const [lastname, setLastName] = useState("");
    const [lastnameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setfirstnameError("first name is required!");
        } else if(e.target.value.length < 2) {
            setfirstnameError("first name must be 2 characters or longer!");
        } else {
            setfirstnameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("last name is required!");
        } else if(e.target.value.length < 2) {
            setLastNameError("last name must be 2 characters or longer!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("email must be 5 characters or longer!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("password must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }

    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("confirm password is required!");
        } else if(e.target.value.length < 8) {
            setConfirmPasswordError("confirm password must be 8 characters or longer!");
        } else {
            setConfirmPasswordError("");
        }
    }
    
    return (
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>Firrst Name: </label>
                <input type="text" onChange={ handleFirstName } />
                {
                    firstnameError ?
                    <p style={{color:'red'}}>{ firstnameError }</p> :
                    ''
                }
            </div>
                        <div>
                <label>Last Name: </label>
                <input type="text" onChange={ handleLastName } />
                {
                    lastnameError ?
                    <p style={{color:'red'}}>{ lastnameError }</p> :
                    ''
                }
            </div>
                        <div>
                <label>Email: </label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
                        <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                    <p style={{color:'red'}}>{ passwordError }</p> :
                    ''
                }
            </div>
                        <div>
                <label>Confirm password: </label>
                <input type="text" onChange={ handleConfirmPassword } />
                {
                    confirmpasswordError ?
                    <p style={{color:'red'}}>{ confirmpasswordError }</p> :
                    ''
                }
            </div>

            <input type="submit" value="Create Movie" />
                        <h3> username: { firstname }</h3>
            <h3> email: { lastname }</h3>
            <h3> password: { email }</h3>
            <h3> email: { password }</h3>
            <h3> password: { confirmpassword }</h3>
        </form>
    );
}
    
export default MovieForm;