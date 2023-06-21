import React, { Component } from 'react'


class NewComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            age : this.props.age
        };
    }
add_num = () => this.setState((prevState)=>({age:prevState.age+1}));

    render() {
    return <div>
            <fieldset>
            <legend>
            <h1> {this.props.firstName} {this.props.lastName}</h1>
            <p>age: {this.state.age}</p>
            <p>hair color: {this.props.hairColor}</p>
            <button onClick={this.add_num}>click  {this.props.firstName} {this.props.lastName}</button>
            </legend>
            </fieldset>
        </div>
    }
}

export default NewComponent;