import React from 'react';
import ListForm from './ListForm';
import { useState } from 'react';
import {nanoid} from 'nanoid';

function Form() {

    const [formData, setFormData] = useState(
        {
            fname: '',
            lname: '',
            isSelected: false
        }
    );
    const [data, setData] = useState([
        { fname: 'Tushar', lname: 'Hasan', isSelected: true },
        { fname: 'Tuhin', lname: 'Hassan', isSelected: true },
        { fname: 'Toufiq', lname: 'Huda', isSelected: false },
        { fname: 'Shakir', lname: 'Khan', isSelected: true },
    ]);


    const newFormData = { ...formData };

    const handleChange = (event) => {
        // this.setState({values: event.target.value})
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        newFormData[fieldName] = fieldValue;
        setFormData(newFormData);
    }
    const handleSubmit = (event) => {

        const newData = [...data, newFormData];
        setData(newData);

        event.preventDefault();
    }


    return (
        // <form onSubmit={this.handleSubmit}>
        //     <input value = {this.state.values} onChange = {this.handleChange} name = "inputVal"/>
        //     <input value = {this.state.values} onChange = {this.handleChange} name = "inputVal2"/>
        //     <input value = {this.state.values} onChange = {this.handleChange} name = "inputVal3"/>
        //     <button type = "submit">Submit</button>
        // </form>
        <div>
            <div className="container mt-5" onSubmit={handleSubmit}>
                <form className="row g-3">
                    <div className="col-md-6">
                        <label for="firstName" className="form-label" >First name</label>
                        <input type="text" className="form-control" id="firstName" name="fname" onChange={handleChange} required />
                    </div>
                    <div className="col-md-6">
                        <label for="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" name="lname" onChange={handleChange} required />
                    </div>
                    <div className="col-6">
                        <label for="inputAddress" className="form-label" >Is Selected?</label>
                        <select className="form-select" onChange={handleChange} name = "isSelected">
                            <option value={true} selected>Selected</option>
                            <option value={false}>Not Selected</option>
                        </select>
                    </div>

                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Insert</button>
                    </div>
                </form>
                <ListForm contact = {data}/>
            </div>

            {/* <table className="table table-striped table-hover container">
                <thead>
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((d,index) => (
                        <tr>
                            <th scope="row">{index+1}</th>
                            <td>{d.fname}</td>
                            <td>{d.lname}</td>
                        </tr>
                    ))}

                </tbody>
            </table> */}
        </div>


    );
}
export default Form;