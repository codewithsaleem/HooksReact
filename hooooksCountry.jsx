import React, { useState } from "react";
function CountryForm(props) {
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    // function handleChange(e) {
    //     let { currentTarget: input } = e;
    //     let newArr1 = { ...newArr };
    //     newArr1[input.name] = input.value;
    //     setNewArr(newArr1);
    // }

    return (
        <div className="container mt-3">
            <form>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="selectedCountry"
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.currentTarget.value)}
                    >
                        <option value="">Select Country</option>
                        {props.arr1.map((ele, index) => (
                            <option value={ele.country} key={index}>{ele.country}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <select
                        className="form-control"
                        name="selectedCity"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.currentTarget.value)}
                    >
                        <option value="">Select City</option>
                        {props.arr1.find((loc) => loc.country === selectedCountry)
                            ?.cities.map((city) => (
                                <option value={city} key={city}>
                                    {city}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary mt-2">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default CountryForm;