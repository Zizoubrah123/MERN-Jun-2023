import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
        setFirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>first name: </label> 
                <input type="text" value={firstname} onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>last name: </label> 
                <input type="text" value={lastname} onChange={ (e) => setlastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>password: </label> 
                <input type="text" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>confirm Password: </label>
                <input type="text" value={confirmpassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />

            <h3> username: { firstname }</h3>
            <h3> email: { lastname }</h3>
            <h3> password: { email }</h3>
            <h3> email: { password }</h3>
            <h3> password: { confirmpassword }</h3>
        </form>
    );
};
    
export default UserForm;