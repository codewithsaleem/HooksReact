import React, { useEffect, useState } from "react";

function AddNewPerson(props) {
    let techs = ["React", "Javascript", "Jquery", "AngularJS", "Node.js"];
    let cities = ["London", "Paris", "New York", "Bengaluru"];
    let desig = ["Developer", "Senior Developer", "Team Lead"];

    const [person, setPerson] = useState({ name: "", age: "", city: "", designation: "", techsKnown: [] })
    let { index } = props.match.params;

    useEffect(() => {
        updateData();
    }, [index])
    function updateData() {
        let { persons } = props;
        let person1 = index ? persons[+index] : { name: "", age: "", city: "", designation: "", techsKnown: [] };
        setPerson(person1);
    }

    function handleChange(e) {
        let { currentTarget: input } = e;
        let person1 = { ...person };
        input.type === "checkbox"
            ? input.name === "techsKnown"
                ? (person1.techsKnown = updateCBs(
                    person1.techsKnown,
                    input.checked,
                    input.value
                ))
                : (person1[input.name] = input.checked)
            : person1[input.name] = input.value;
        setPerson(person1);
    }
    function updateCBs(inpArr, checked, value) {
        if (checked) inpArr.push(value);
        else {
            let index = inpArr.findIndex((ele) => ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(person, index);
        props.history.push("/person");
    }


    let { name, age, city, designation, techsKnown } = person;
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
                        onChange={handleChange}
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
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <select
                        className="form-control"
                        name="city"
                        value={city}
                        onChange={handleChange}
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
                                onChange={handleChange}
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
                                onChange={handleChange}
                            />
                            <label className="form-check-label">{ele}</label>
                        </div>
                    ))}
                </div>
                <div className="form-group">
                    <button className="btn btn-primary mt-2" onClick={handleSubmit}>{index ? "Update" : "Submit"}</button>
                </div>
            </form>
        </div>
    )
}

export default AddNewPerson;