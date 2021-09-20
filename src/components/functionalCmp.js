import React,{useState} from "react";

// this way is called  "without destructuring"
const FuncComp = (props)=>{
    const [count, setCount] = useState(0);

    return(
        <div>
           <p> Hi. I'm a functional Component!! my name is <b>{props.name}</b></p>
           <button onClick={()=>{setCount(count+1);}}>
               {count}
           </button>
        </div>
    );
}

// this way is called  "with destructuring"
// const FuncComp = ({ name }) => {
//     return <h1>Hello, { name }!</h1>
//   }
  
export default FuncComp;