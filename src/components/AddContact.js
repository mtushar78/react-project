import React from "react";

class AddContact extends React.Component {
    render() {
        const {name} = this.props;
        return (
            <div>I'm a class component !! My name is <b> {name}</b></div>
        );
    }
}
export default AddContact;