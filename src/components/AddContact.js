import React from "react";

class AddContact extends React.Component {
    constructor() {
        super();
        // if we dont use super, below error message occurs:
        // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor

        this.state = {
            count: 0,
            name: "Tushar"
        };
    }

    //callback function
    handlerMethod=()=>{
        this.setState({count: this.state.count +1});
    }
    // handlerMethod(){
    //     this.setState({count: this.state.count +1});
    // }

    render() {
        const { name } = this.props;
        return (
            <div>
                <div>I'm a class component !! My name is <b> {this.state.name}</b></div>
                <label>The current count is: {this.state.count}</label>
                <br></br>
                
                <button onClick={this.handlerMethod}>Count+1</button>
                {/* // or <button onClick={() => this.handleClick()}></button> */}
            </div>

        );
    }
}
export default AddContact;

// for more about state and props go this link-   https://lucybain.com/blog/2016/react-state-vs-pros/