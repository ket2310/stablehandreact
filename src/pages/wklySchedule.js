import React from "react";
import '../styles/timesheet.css'
import LessonForm from "../components/lessonForm";
import { useState } from 'react';

export default function WklySchedule() {
    const [anchorPopup, setAnchorPopup] = useState(false)
    const [message, setMessage] = useState('')
    const scheduleAlesson = (event) => {
        //alert('you are here!!!!!!!!!!!!!!')
        event.preventDefault();

        // get the id of the time block
        var lessonHour = event.target.id;
        setMessage(lessonHour);
        console.log(event)
        console.log(lessonHour)
        console.log(anchorPopup)
        setAnchorPopup(true);
    }

    return (
        <div className="app-container">
            <LessonForm trigger={anchorPopup} setTrigger={setAnchorPopup} 
                message={message}>
                    </LessonForm>
            <table>
                <thead>
                    <tr>
                        <th align="left">Time:</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2}><span>09:00</span></td>
                        <td><a href="/" id="Tu9" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We9" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th9" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr9" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa9" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su9" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu93" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We93" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th93" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr93" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa93" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su93" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>10:00</span></td>
                        <td><a href="/" id="Tu10" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We10" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th10" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr10" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa10" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su10" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu103" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We103" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th103" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr103" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa103" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su103" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>11:00</span></td>
                        <td><a href="/" id="Tu11" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We11" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th11" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr11" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa11" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su11" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu113" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We113" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th113" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr113" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa113" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su113" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>12:00</span></td>
                        <td><a href="/" id="Tu12" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We12" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th12" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr12" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa12" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su12" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu123" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We123" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th123" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr123" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa123" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su123" onClick={scheduleAlesson}>1Available</a></td>
                    </tr>

                    <tr>
                        <td rowSpan={2}><span>1:00</span></td>
                        <td><a href="/" id="Tu1" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We1" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th1" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr1" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa1" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su1" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu13" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We13" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th13" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr13" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa13" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su13" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>2:00</span></td>
                        <td><a href="/" id="Tu2" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We2" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th2" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr2" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa2" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su2" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu23" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We23" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th23" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr23" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa23" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su23" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>3:00</span></td>
                        <td><a href="/" id="Tu3" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We3" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th3" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr3" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa3" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su3" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu33" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We33" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th33" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr33" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa33" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su33" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>4:00</span></td>
                        <td><a href="/" id="Tu4" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We4" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th4" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr4" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa4" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su4" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu43" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We43" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th43" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr43" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa43" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su43" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>5:00</span></td>
                        <td><a href="/" id="Tu5" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We5" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th5" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr5" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa5" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su5" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu53" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="We53" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Th53" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Fr53" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Sa53" onClick={scheduleAlesson}>Available</a></td>
                        <td><a href="/" id="Su53" onClick={scheduleAlesson}>Available</a></td>
                    </tr>
                </tbody>

            </table>

        </div>

    );
}