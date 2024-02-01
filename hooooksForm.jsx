import React, { useEffect, useState } from "react";

function AddPersonHooksForm(props) {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    const [designation, setDesignation] = useState("");
    const [techsKnown, setTechsKnown] = useState([]);

    let cities = ["London", "Paris", "New York", "Bengaluru"];
    let desig = ["Developer", "Senior Developer", "Team Lead"];
    let techs = ["React", "Javascript", "Jquery", "AngularJS", "Node.js"];

    let { index } = props.match.params;
    let { persons } = props;
    let person = index ? persons[+index] : { name: "", age: "", city: "", designation: "", techsKnown: [] };

    useEffect(() => {
        setName(person.name);
        setAge(person.age);
        setCity(person.city);
        setDesignation(person.designation);
        setTechsKnown(person.techsKnown);
    }, [index])

    function updateCBs(inpArr, checked, value) {
        let inpArr1 = [...inpArr];
        if (checked) inpArr1.push(value);
        else {
            let index = inpArr1.findIndex((ele) => ele === value);
            if (index >= 0) inpArr1.splice(index, 1);
        }
        return inpArr1;
    }

    function handleSubmit(e) {
        e.preventDefault();
        let person = { name: name, age: age, city: city, designation: designation, techsKnown: techsKnown };
        props.onSubmit(person, index);
        props.history.push("/person");
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
                        placeholder="Enter person's name - Hooks"
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
                        placeholder="Enter person's age - Hooks"
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
                    <label>Choose Designation</label> <br />
                    {desig.map((ele) => (
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="designation"
                                value={ele}
                                checked={designation === ele}
                                onChange={(e) => setDesignation(e.currentTarget.value)}
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
                                onChange={(e) => setTechsKnown(updateCBs(techsKnown, e.currentTarget.checked, e.currentTarget.value))}
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
export default AddPersonHooksForm;