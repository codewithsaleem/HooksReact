import React, { Component } from "react";

class NormalForm extends Component {
    state = {
        persons: { name: "", age: "", city: "", designation: "", techsKnown: [] },
        techs: ["React", "Javascript", "Jquery", "AngularJS", "Node.js"],
        cities: ["London", "Paris", "New York", "Bengaluru"],
        desig: ["Developer", "Senior Developer", "Team Lead"]
    }

    updateData() {
        let { index } = this.props.match.params;
        let { persons } = this.props;
        let person = index ? persons[+index] : { name: "", age: "", city: "", designation: "", techsKnown: [] };
        this.setState({ persons: person })
    }
    componentDidMount() {
        this.updateData();
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps !== this.props) this.updateData();
    }

    handleChange = (e) => {
        let { currentTarget: input } = e;
        let s1 = { ...this.state };
        input.type === "checkbox"
            ? input.name === "techsKnown"
                ? (s1.persons.techsKnown = this.updateCBs(
                    s1.persons.techsKnown,
                    input.checked,
                    input.value
                ))
                : (s1.persons[input.name] = input.checked)
            : s1.persons[input.name] = input.value;
        this.setState(s1);
    }
    updateCBs = (inpArr, checked, value) => {
        if (checked) inpArr.push(value);
        else {
            let index = inpArr.findIndex((ele) => ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let { persons } = this.state;
        let { index } = this.props.match.params;
        this.props.onSubmit(persons, index);
        this.props.history.push("/person");
    }

    render() {
        let { name, age, city, designation, techsKnown } = this.state.persons;
        let { cities, desig, techs } = this.state;

        let { index } = this.props.match.params;

        return (
            <div className="container mt-3">
                <form>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={name}
                            placeholder="Enter person's name"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age</label>
                        <input
                            className="form-control"
                            type="number"
                            name="age"
                            value={age}
                            placeholder="Enter person's age"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <select
                            className="form-control"
                            name="city"
                            value={city}
                            onChange={this.handleChange}
                        >
                            <option value="">Select City</option>
                            {cities.map((ele, index) => (
                                <option value={ele} key={index}>{ele}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Choose Designation</label> <br />
                        {desig.map((ele) => (
                            <div className="form-check form-check-inline">
                                <input
                                    className="form-check-input"
                                    type="radio"
                                    name="designation"
                                    value={ele}
                                    checked={designation === ele}
                                    onChange={this.handleChange}
                                />
                                <label className="form-check-label">{ele}</label>
                            </div>
                        ))}
                    </div>
                    <div className="form-group">
                        <label>Choose all the technologies you know</label>
                        {techs.map((ele) => (
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="techsKnown"
                                    value={ele}
                                    checked={techsKnown.find((t1) => t1 === ele)}
                                    onChange={this.handleChange}
                                />
                                <label className="form-check-label">{ele}</label>
                            </div>
                        ))}
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary mt-2" onClick={this.handleSubmit}>{index ? "Update" : "Submit"}</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default NormalForm;