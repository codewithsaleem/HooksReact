import React, { useEffect, useState } from "react";

function AddNewEmployee(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [experience, setExperience] = useState("");
    const [department, setDepartment] = useState("");
    const [interests, setInterests] = useState([]);

    let cities = ["Delhi", "Mumbai", "Chennai"];
    let exp = ["0", "1", "2", "3", "4", "5"];
    let deptmt = ["Finance", "HR", "Technology", "Marketing"];
    let intsts = ["Sport", "Movies", "Cooking", "Singing"];

    let { index } = props.match.params;
    let { employees } = props;
    let emp1 = index ? employees[+index] : { name: "", age: "", city: "", experience: "", department: "", interests: [] };

    useEffect(() => {
        setName(emp1.name)
        setAge(emp1.age)
        setCity(emp1.city)
        setExperience(emp1.experience)
        setDepartment(emp1.department)
        setInterests(emp1.interests)
    }, [index])

    function handleSubmit(e) {
        e.preventDefault();
        let emp1 = { name: name, age: age, city: city, experience: experience, department: department, interests: interests };
        props.onSubmit(emp1, index);
        props.history.push("/employee");
    }

    function updateCBs(inpArr, checked, value) {
        let inpArr1 = [...inpArr];
        if (checked) inpArr1.push(value);
        else {
            let index = inpArr1.findIndex((ele) => ele === value);
            if (index >= 0) inpArr1.splice(index, 1);
        }
        return inpArr1;
    }

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
                        onChange={(e) => setName(e.currentTarget.value)}
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
                        onChange={(e) => setAge(e.currentTarget.value)}
                    />
                </div>
                <div className="form-group">
                    <label>City</label>
                    <select
                        className="form-control"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.currentTarget.value)}
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
                        onChange={(e) => setExperience(e.currentTarget.value)}
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
                                onChange={(e) => setDepartment(e.currentTarget.value)}
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
                                onChange={(e) => setInterests(updateCBs(interests, e.currentTarget.checked, e.currentTarget.value))}
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
export default AddNewEmployee;