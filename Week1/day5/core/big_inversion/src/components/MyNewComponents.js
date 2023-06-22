import React from 'react';

const PersonCard = props =>{
        return(
            <div>
    <fieldset>
        <legend>
                <h1> {props.firstName} {props.lasatName}</h1>
                <p>age: {props.age}</p>
                <p>hair color: {props.hairColor}</p>
        </legend>
    </fieldset>
            </div>

        );
    }


export default PersonCard ;