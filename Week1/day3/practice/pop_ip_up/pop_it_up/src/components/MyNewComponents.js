import React, { Component } from 'react';

class MyNewComponenets extends Component{
    render(){
        return(
            <div>
    <fieldset>
        <legend>
                <h1> {this.props.firstname} {this.props.lasatname}</h1>
                <p>age: {this.props.age}</p>
                <p>hair color: {this.props.haircolor}</p>
        </legend>
    </fieldset>
            </div>

        );
    }
}

export default MyNewComponenets;