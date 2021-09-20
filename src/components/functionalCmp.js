import React from "react";

// this way is called  "without destructuring"
const FuncComp = (props)=>{
    return(
        <div>
            Hi. I'm a functional Component!! my name is <b>{props.name}</b>
        </div>
    );
}

// this way is called  "with destructuring"
// const FuncComp = ({ name }) => {
//     return <h1>Hello, { name }!</h1>
//   }
  
export default FuncComp;