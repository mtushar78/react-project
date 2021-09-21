import React from "react";

class Clock extends React.Component{

    // constructor and its parameter as prop is used if we need the props to initiate a value to state
    // constructor(props){
    //     super(props);
    //     this.state={
    //         date: new Date()
    //     };
    // }
    //as we dont need props to initate any value to state so we simply follow below process

    state = {date: new Date()}

    componentDidMount(){
       this.componentInterval =  setInterval(() => {
            this.tick()
        }, 1000);
    }
    tick(){
        this.setState({
            date: new Date(),
        });
    }
    componentWillUnmount(){
        clearInterval(this.componentInterval);
    }
    


    render(){
        return(
            <h1 className="heading container center-top">
                <span className="text">
                    {this.state.date.toLocaleTimeString(this.props.locale)}
                </span>
            </h1>
        );
    }
}
export default Clock;