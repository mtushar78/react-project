import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from 'jquery';


function ListForm(props) {

    $(document).ready(function () {
        $('#example').DataTable();
    });
    let x =0;
    props.contact.map( (c,index) => {
        x = x + c.count
    })

    return (
        <div>
            {/* <table className="table table-striped table-hover container">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">count</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contact.map((d, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{d.fname}</td>
                            <td>{d.lname}</td>
                            <td className="align-self-center d-flex justify-content-center m-auto">
                                <i className="fas fa-minus p-2"></i>
                                  <p className="ps-1 pe-1 m-0">{d.count}</p>
                                <i className="fas fa-plus p-2"></i>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table> */}

            <table id="example" className="table table-striped" >
                <thead>
                    <tr>
                        <th className="align-self-start">Name</th>
                        <th className="align-self-center">Position</th>
                        <th className="align-self-center">Office</th>
                        <th className="align-self-center">Age</th>
                    </tr>
                </thead>
                <tbody>
                    {props.contact.map((d, index) => (
                        <tr key = {index} val ={index}>
                            <td>{index + 1}</td>
                            <td className="align-self-center">{d.fname}</td>
                            <td className="align-self-center">{d.lname}</td>
                            <td className="align-self-center d-flex justify-content-center m-auto">
                                <i className="fas fa-minus p-2" name = "minus" onClick={(e)=> props.func(e,index)}></i>
                                <p className="ps-1 pe-1 m-0">{d.count}</p>
                                <i className="fas fa-plus p-2" name = "plus" onClick={(e)=> props.func(e,index)}></i>
                            </td>
                        </tr>
                    ))}

                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Total: {x}</th>
                    </tr>
                </tfoot>
            </table>
        </div>

    );
}
export default ListForm;

//for more of this project this link may help
// https://www.freecodecamp.org/news/how-to-build-a-shopping-list-using-react-hooks-w-starter-code-and-video-walkthrough/

//for datatable in react https://therichpost.com/how-to-use-jquery-datatable-in-reactjs-application/

// npm install --save datatables.net-dt
// npm install datatables.net --save
// npm install bootstrap --save
// npm install jquery --save

