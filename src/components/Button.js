import React from 'react';

class Button extends React.Component{
    constructor(){
        super();
        console.log("started!!");
    }

    //this process is still shallow to me
    // shouldComponentUpdate(nextProps){
        
    //     console.log(this.props);
    //     console.log(nextProps);
    //     return false;
    // }

    render(){
        const {change, locale}  = this.props;
        return(
            <button type = "button" onClick={() => change()}>{ locale == 'bn-BD' ? 'Change Clock to English' : 'ঘড়ি পরিবরতন করুন'}</button>
        );
    }
}
export default Button;