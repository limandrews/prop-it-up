import React, { Component } from 'react'

export default class PersonCard extends Component {

    // declare constructor to override our default constructor so that we can initally set the state object
    constructor(props) { 
        // gives us all the functionalities of the default constructor that comes with the Component
        super(props);
        this.state = {
            age: this.props.age
        }

    }

    buttonClicker = () => {
        this.setState({ age: this.state.age+1 })
    }

    render() {
    //i could do a -  const { lastName, firstName, etc..} = this.props/state; - this way i can take out all the this.props in the div below 
    return (
    <div>
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
            <button onClick={this.buttonClicker}>Birthday Button for {this.props.firstName} {this.props.lastName}</button>
    </div>
    )
}
}
