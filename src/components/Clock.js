import React from "react";
import Button from "./Button" ;

class Clock extends React.Component{

    // constructor and its parameter as prop is used if we need the props to initiate a value to state
    // constructor(props){
    //     super(props);
    //     this.state={
    //         date: new Date()
    //     };
    // }
    //as we dont need props to initate any value to state so we simply follow below process

    state = {
        date: new Date(),
        locale: 'bn-BD'
    }

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
    handleClick =  () => {
        if(this.state.locale === 'bn-BD'){
            this.setState({
                locale: 'en-US'
            })
        }else{
            this.setState({
                locale: 'bn-BD'
            })
        }
       
    }
    handleClick2(){
        if(this.state.locale === 'bn-BD'){
            this.setState({
                locale: 'en-US'
            })
        }else{
            this.setState({
                locale: 'bn-BD'
            })
        }
    }


    render(){
        const {locale, date} = this.state;
        return(
            <div className="container">
            <h1 className="heading center-top">
                <span className="text">
                    {date.toLocaleTimeString(locale)}
                </span>
            </h1>
            {/* <button type = "button" onClick={this.handleClick2.bind(this)}>Click Here</button>        -> this is one way [normal function way]*/}
            {/* this way is by a callBack function */}
            <Button change = {this.handleClick} locale= {this.state.locale}></Button>
            </div>
        );
    }
}
export default Clock;