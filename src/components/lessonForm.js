import React, { useState } from "react";
import "../styles/lesson.css"

function LessonForm(props) {

    // Here we set two state variables for firstName and lastName using `useState`
    const [startTime, setStartTime] = useState('9:00');
    const [endTime, setEndTime] = useState('10:00');
    const [duration, setDuration] = useState('1');
    const [rider, setRider] = useState('')
    const [instructor, setInsteructor] = useState ('')
    const [horse , setHorse ] = useState('')

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;

        // Ternary statement that will call either setFirstName or setLastName based on what field the user is typing in
        return name === 'firstName' ? setFirstName(value) : setLastName(value);
    };

    const handleRiderChange = (e) =>{
        e.preventDefault();

    };

    const handleInstructorChange = (e) => {
        e.preventDefault();

    };

    const handleHorseChange = (e) => {
        e.preventDefault();

    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // Alert the user their first and last name, clear the inputs
        alert(`Hello ${firstName} ${lastName}`);
        setFirstName('');
        setLastName('');
    };

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-content">
                <h3>{props.message}</h3>
                <span className="close-btn" onClick={() => props.setTrigger(false)}>
                    &times;</span>
                {props.children}


                <form className="form">
                    <select onChange={handleRiderChange}>
                        <option value="Rider"> -- Select a Rider -- </option>
                        {riders.map((rider) => <option value={rider.value}>{rider.label}</option>)}
                    </select>

                    <input
                        value={startTime}
                        name="startTime"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Start Time"
                    />
                    <input
                        value={endTime}
                        name="End Time"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <select onChange={handleInstructorChange}>
                        <option value="Instructor"> -- Select an Instructor -- </option>
                        {instructors.map((instructor) => <option value={instructor.value}>{instructor.label}</option>)}
                    </select>

                    <select onChange={handleHorseChange}>
                        <option value="Horse"> -- Select a Horse -- </option>
                        {horses.map((horse) => <option value={horse.value}>{horse.label}</option>)}
                    </select>


                    <input 
                        value={duration}
                        name="duration"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Length"
                    />
                    <button type="button" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </form>

            </div>
        </div>
    ) : "";
}


export default LessonForm;