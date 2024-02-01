import React, { useState, useEffect } from "react";

function AddNewEmployee1(props) {
    let cities = ["Delhi", "Mumbai", "Chennai"];
    let exp = ["0", "1", "2", "3", "4", "5"];
    let deptmt = ["Finance", "HR", "Technology", "Marketing"];
    let intsts = ["Sport", "Movies", "Cooking", "Singing"];

    const [employee, setEmployee] = useState({ name: "", age: "", city: "", experience: "", department: "", interests: [] });

    let { index } = props.match.params;

    useEffect(() => {
        updateData();
    }, [index])
    function updateData() {
        let { employees } = props;
        let emp1 = index ? employees[+index] : { name: "", age: "", city: "", experience: "", department: "", interests: [] };
        setEmployee(emp1);
    }

    function handleSubmit(e) {
        e.preventDefault();
        let emp1 = { name: name, age: age, city: city, experience: experience, department: department, interests: interests };
        props.onSubmit(emp1, index);
        props.history.push("/employee");
    }

    function handleChange(e) {
        let { currentTarget: input } = e;
        let emp = { ...employee };

        input.type === "checkbox"
            ? input.name === "interests"
                ? emp.interests = updateCBs(emp.interests, input.checked, input.value)
                : emp[input.name] = input.checked
            : emp[input.name] = input.value;
        setEmployee(emp);
    }

    function updateCBs(inpArr, checked, value) {
        if (checked) inpArr.push(value);
        else {
            let index = inpArr.findIndex((ele) => ele === value);
            if (index >= 0) inpArr.splice(index, 1);
        }
        return inpArr;
    }

    let { name, age, city, experience, department, interests } = employee;
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
                        placeholder="Enter person's name - hooks New"
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
                    <label>Experience</label>
                    <select
                        className="form-control"
                        name="experience"
                        value={experience}
                        onChange={handleChange}
                    >
                        <option value="">Select Experience</option>
                        {exp.map((ele, index) => (
                            <option value={ele} key={index}>{ele}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Choose Department</label> <br />
                    {deptmt.map((ele) => (
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="department"
                                value={ele}
                                checked={department === ele}
                                onChange={handleChange}
                            />
                            <label className="form-check-label">{ele}</label>
                        </div>
                    ))}
                </div>
                <div className="form-group">
                    <label>Choose all the interests you know</label>
                    {intsts.map((ele) => (
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                name="interests"
                                value={ele}
                                checked={interests.find((t1) => t1 === ele)}
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
export default AddNewEmployee1;