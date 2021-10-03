import React from 'react';
import { useState } from 'react/cjs/react.development';
// import data from './data.json';
// import {nanoid} from 'nanoid';

function ListForm(props) {


    return (
        <table className="table table-striped table-hover container">
            <thead>
                <tr>
                    <th scope="col">i</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                </tr>
            </thead>
            <tbody>
                {props.contact.map((d,index) => (
                    <tr>
                        <th scope="row">{index}</th>
                        <td>{d.fname}</td>
                        <td>{d.lname}</td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
}
export default ListForm;

//for more of this project this link may help
// https://www.freecodecamp.org/news/how-to-build-a-shopping-list-using-react-hooks-w-starter-code-and-video-walkthrough/


