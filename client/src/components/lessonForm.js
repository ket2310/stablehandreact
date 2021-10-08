import React, { useState } from "react";
import "../styles/lesson.css"
import findDateOfLesson from "../utils/findDateOfLesson";
import { useQuery } from '@apollo/client';
import { QUERY_HORSES, QUERY_RIDERS, QUERY_INSTRUCTORS } from "../utils/queries";

function LessonForm(props) {
    const lessonDate = props.weekOf.format("MM/DD/YYYY");
    const lessonDay = props.lessonDay;
    console.log(lessonDate)
    console.log(lessonDay)
    const bookedDate = findDateOfLesson(lessonDay, lessonDate)
    const [startTime, setStartTime] = useState('9:00');
    const [endTime, setEndTime] = useState('10:00');
    const [duration, setDuration] = useState('1');
    const [rider, setRider] = useState('')
    const [instructor, setInsteructor] = useState('')
    const [horse, setHorse] = useState('')

    const { loadingRiders, data } = useQuery(QUERY_RIDERS);

    // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
    const riders = data?.riders || [];
    console.log(riders)

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = e.target;
    };

    const handleRiderChange = (e) => {
        setRider(e.target.value)

    };

    const handleInstructorChange = (e) => {
        setInsteructor(e.target.value)

    };

    const handleHorseChange = (e) => {
        setHorse(e.target.value);

    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

    };

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-content">
                <h3>{props.message}</h3>
                <span className="close-btn" onClick={() => props.setTrigger(false)}>
                    Close</span>
                {props.children}
                <form className="lessonForm">
                    <div>
                        <label> Date:</label>&nbsp;
                        <input
                            value={bookedDate}
                            name="startTime"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Lesson Date"
                        />
                        <label> Start:</label>&nbsp;
                        <input
                            value={startTime}
                            name="startTime"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Start Time"
                        />
                    </div>
                    <div>
                        <label> End:</label>&nbsp;
                        <input
                            value={endTime}
                            name="End Time"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div>
                        <label>Rider: </label>&nbsp;
                        <select onChange={handleRiderChange}>
                            <option value="Rider"> -- Select a Rider -- </option>
                            {riders && riders.map((riders) => (<option key={riders._id}>{riders.firstNsme + " " + riders.LastName}</option>))}
                        </select>
                    </div>
                    <div>
                        <label>Instructor: </label>&nbsp;
                        <select onChange={handleInstructorChange}>
                            <option value="Instructor"> -- Select an Instructor -- </option>
                            {/* {instructors.map((instructor) => <option value={instructor.value}>{instructor.label}</option>)} */}
                        </select></div><div>
                        <label>Horse: </label>&nbsp;
                        <select onChange={handleHorseChange}>
                            <option value="Horse"> -- Select a Horse -- </option>
                            {/* {horses.map((horse) => <option value={horse.value}>{horse.label}</option>)} */}
                        </select>
                    </div>
                    <div> <label>Duration</label>&nbsp;
                        <input
                            value={duration}
                            name="duration"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Length"
                        />
                    </div>
                    <button type="button" id="bookTime" onClick={handleFormSubmit}>
                        Submit
                    </button>
                </form>

            </div>
        </div>
    ) : "";
}


export default LessonForm;
