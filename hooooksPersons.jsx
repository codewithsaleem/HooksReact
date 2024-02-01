import React, { Component } from "react";
class Persons extends Component {
    handleEdit = (index) => {
        this.props.history.push(`/person/${index}/edit`);
    }
    render() {
        const { persons } = this.props;
        return (
            <div className="container mt-4">
                <h2>Welcome to the Persons page</h2>
                {persons.map((ele, index) => (
                    <div className="row" key={index}>
                        <div className="col-sm-2 border">{ele.name}</div>
                        <div className="col-sm-1 border">{ele.age}</div>
                        <div className="col-sm-2 border">{ele.city}</div>
                        <div className="col-sm-2 border">{ele.designation}</div>
                        <div className="col-sm-4 border">{ele.techsKnown.join(", ")}</div>

                        <div className="col-sm-1 border"><button className="btn btn-warning m-1" onClick={() => this.handleEdit(index)}>Edit</button></div>
                    </div>
                ))}
            </div>
        )
    }
}
export default Persons;