import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Navbar from "./hooooksNavbar";
import Persons from "./hooooksPersons";
import NormalForm from "./hooooksNormalForm";
import AddPersonHooksForm from "./hooooksForm";
import AddNewPerson from "./hooooksFunctionCompoForm";
class MainComponent extends Component {
    state = {
        persons: [
            {
                name: "Jack",
                age: 20,
                city: "London",
                designation: "Senior Developer",
                techsKnown: ["React", "Javascript"]
            },
            {
                name: "Anna",
                age: 30,
                city: "Paris",
                designation: "Team Lead",
                techsKnown: ["React", "Javascript", "Node.js"]
            },
        ]
    }

    handleSubmitPerson = (person, index) => {
        let { persons } = this.state;
        index ? persons[+index] = person : persons.push(person);
        this.setState({ persons: persons })
    }

    render() {
        let { persons } = this.state;

        return (
            <div className="container">
                <Navbar />

                <Switch>
                    <Route path="/person/add"
                        render={(props) => <AddNewPerson {...props} onSubmit={this.handleSubmitPerson} />}
                    />

                    <Route path="/person/:index/edit"
                        render={(props) => <AddNewPerson {...props} persons={persons} onSubmit={this.handleSubmitPerson} />}
                    />

                    {/* <Route path="/person/add"
                        render={(props) => <AddPersonHooksForm {...props} onSubmit={this.handleSubmitPerson} />}
                    />

                    <Route path="/person/:index/edit"
                        render={(props) => <AddPersonHooksForm {...props} persons={persons} onSubmit={this.handleSubmitPerson} />}
                    /> */}

                    {/* <Route path="/person/add"
                        render={(props) => <NormalForm {...props} onSubmit={this.handleSubmitPerson} />}
                    />
                    <Route path="/person/:index/edit"
                        render={(props) => <NormalForm {...props} persons={persons} onSubmit={this.handleSubmitPerson} />}
                    /> */}

                    <Route path="/person"
                        render={(props) => <Persons {...props} persons={persons} />}
                    />
                    <Redirect from="/" to="/person" />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;