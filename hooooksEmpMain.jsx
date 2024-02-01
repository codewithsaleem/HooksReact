import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./hooooksEmpNavbar";
import Employee from "./hooooksEmp";
import AddNewEmployee from "./hooooksEmpForm";
import AddNewEmployee1 from "./hooooksEmpHandleChangeForm";
class MainComponent extends Component {
    state = {
        employees: [
            {
                name: "Jack",
                age: 25,
                city: "Delhi",
                department: "HR",
                experience: 5,
                interests: ["Sport", "Movies"]
            },
            {
                name: "Will",
                age: 23,
                city: "Mumbai",
                department: "Marketing",
                experience: 3,
                interests: ["Singing", "Movies"]
            },
        ]
    }

    handleSubmit = (emp, index) => {
        console.log("emp",emp)
        let { employees } = this.state;
        let emp1 = [...employees];
        index ? emp1[+index] = emp : emp1.push(emp);
        this.setState({ employees: emp1 })
    }

    render() {
        let { employees } = this.state;

        return (
            <div className="container">
                <Navbar />

                <Switch>
                    {/* <Route path="/employee/add"
                        render={(props) => <AddNewEmployee {...props} onSubmit={this.handleSubmit} />}
                    />

                    <Route path="/employee/:index/edit"
                        render={(props) => <AddNewEmployee {...props} employees={employees} onSubmit={this.handleSubmit} />}
                    /> */}
                    <Route path="/employee/add"
                        render={(props) => <AddNewEmployee1 {...props} onSubmit={this.handleSubmit} />}
                    />

                    <Route path="/employee/:index/edit"
                        render={(props) => <AddNewEmployee1 {...props} employees={employees} onSubmit={this.handleSubmit} />}
                    />

                    <Route path="/employee"
                        render={(props) => <Employee {...props} employees={employees} />}
                    />
                    <Redirect from="/" to="/employee" />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;