import React, { useState, useEffect } from "react";
import './funcComp.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery'; 


// this way is called  "without destructuring"
const FuncComp = (props) => {
    const [count, setCount] = useState('a');
    useEffect(() => {
        document.title = `${count}`;
    });
    $(document).ready(function () {
        $('#example').DataTable();
    });

    

    return (
        <div>
            
        </div>
        
    );
}

// this way is called  "with destructuring"
// const FuncComp = ({ name }) => {
//     return <h1>Hello, { name }!</h1>
//   }

export default FuncComp;