import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import CountryForm from "./hooooksCountry";
class MainComponent extends Component {
    state = {
        arr1: [
            {
                country: "India",
                cities: ["New Delhi", "Mumbai", "Bangalore", "Chennai", "Pune"]
            },
            {
                country: "USA",
                cities: ["Los Angeles", "Chicago", "New York", "Seattle", "Washington DC"]
            },
            {
                country: "Japan",
                cities: ["Tokyo", "Kyoto"]
            },
            {
                country: "China",
                cities: ["Shanghai", "Beijing", "Shenzen"]
            }
        ]
    }

    render() {
        let {arr1} = this.state;

        return (
            <div className="container">
                <Switch>
                    <Route path="/country"
                        render={(props) => <CountryForm {...props} arr1={arr1} />}
                    />
                    <Redirect from="/" to="/country" />
                </Switch>
            </div>
        )
    }
}
export default MainComponent;