import React from 'react';

class Form extends React.Component{
    constructor(){
        super();
        this.state = {
            inputVal: '',
            inputVal2: '',
            inputVal3: ''
        }
    }
    handleChange = (event) => {
        // this.setState({values: event.target.value})
        const { name, value } = event.target;
        this.setState({
            [name] : value
        });
    }
    handleSubmit = (event) => {
        console.log('event: ' + event.target);
        console.log('state' + this.state);

        alert ('the inserted state is '+ this.state.inputVal + ' ' +this.state.inputVal2+  ' '+this.state.inputVal3);
        
        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value = {this.state.values} onChange = {this.handleChange} name = "inputVal"/>
                <input value = {this.state.values} onChange = {this.handleChange} name = "inputVal2"/>
                <input value = {this.state.values} onChange = {this.handleChange} name = "inputVal3"/>
                <button type = "submit">Submit</button>
            </form>
        );
    }
}
export default Form;