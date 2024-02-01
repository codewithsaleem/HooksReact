import React, { Component } from "react";
class Employee extends Component {
    handleEdit = (index) => {
        this.props.history.push(`/employee/${index}/edit`);
    }
    render() {
        const { employees } = this.props;
        return (
            <div className="container mt-4">
                <h2>Welcome to the Employee page</h2>
                {employees.map((ele, index) => (
                    <div className="row" key={index}>
                        <div className="col-sm-2 border">{ele.name}</div>
                        <div className="col-sm-1 border">{ele.age}</div>
                        <div className="col-sm-2 border">{ele.city}</div>
                        <div className="col-sm-1 border">{ele.experience}</div>
                        <div className="col-sm-2 border">{ele.department}</div>
                        <div className="col-sm-2 border">{ele.interests}</div>

                        <div className="col-sm-2 border"><button className="btn btn-warning m-1" onClick={() => this.handleEdit(index)}>Edit</button></div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Employee;