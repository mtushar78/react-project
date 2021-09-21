import React,{useState, useEffect} from "react";

// this way is called  "without destructuring"
const FuncComp = (props)=>{
    const [count, setCount] = useState('a');
    useEffect(()=>{
        document.title = `${count}`;
    });

    return(
        <div>
           <p> Hi. I'm a functional Component!! my name is <b>{props.name}</b></p>
           <button onClick={()=>{setCount(count+'a');}}>
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