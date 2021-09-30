import React from "react";
import '../styles/timesheet.css'
import LessonForm from "../components/lessonForm";
import { useState } from 'react';

export default function WklySchedule() {   
    const [anchorPopup, setAnchorPopup] = useState(false)

    const  scheduleAlesson = (event) => {
        //alert('you are here!!!!!!!!!!!!!!')
        event.preventDefault();

        // get the id of the time block
        var lessonHour = event.target.id;
        console.log(event)
        console.log(lessonHour)
        console.log(anchorPopup)        
        setAnchorPopup(true);
    }

    return (
        <div className="app-container">
            <LessonForm trigger={anchorPopup} setTrigger={setAnchorPopup} ><h3>SUCCESS!!!!!!!!!</h3></LessonForm>
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
                        <td><a href="/" id="We9">Available</a></td>
                        <td><a href="/" id="Th9">Available</a></td>
                        <td><a href="/" id="Fr9">Available</a></td>
                        <td><a href="/" id="Sa9">Available</a></td>
                        <td><a href="/" id="Su9">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu93">Available</a></td>
                        <td><a href="/" id="We93">Available</a></td>
                        <td><a href="/" id="Th93">Available</a></td>
                        <td><a href="/" id="Fr93">Available</a></td>
                        <td><a href="/" id="Sa93">Available</a></td>
                        <td><a href="/" id="Su93">Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>10:00</span></td>
                        <td><a href="/" id="Tu10">Available</a></td>
                        <td><a href="/" id="We10">Available</a></td>
                        <td><a href="/" id="Th10">Available</a></td>
                        <td><a href="/" id="Fr10">Available</a></td>
                        <td><a href="/" id="Sa10">Available</a></td>
                        <td><a href="/" id="Su10">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu103">Available</a></td>
                        <td><a href="/" id="We103">Available</a></td>
                        <td><a href="/" id="Th103">Available</a></td>
                        <td><a href="/" id="Fr103">Available</a></td>
                        <td><a href="/" id="Sa103">Available</a></td>
                        <td><a href="/" id="Su103">Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>11:00</span></td>
                        <td><a href="/" id="Tu11">Available</a></td>
                        <td><a href="/" id="We11">Available</a></td>
                        <td><a href="/" id="Th11">Available</a></td>
                        <td><a href="/" id="Fr11">Available</a></td>
                        <td><a href="/" id="Sa11">Available</a></td>
                        <td><a href="/" id="Su11">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu113">Available</a></td>
                        <td><a href="/" id="We113">Available</a></td>
                        <td><a href="/" id="Th113">Available</a></td>
                        <td><a href="/" id="Fr113">Available</a></td>
                        <td><a href="/" id="Sa113">Available</a></td>
                        <td><a href="/" id="Su113">Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>12:00</span></td>
                        <td><a href="/" id="Tu12">Available</a></td>
                        <td><a href="/" id="We12">Available</a></td>
                        <td><a href="/" id="Th12">Available</a></td>
                        <td><a href="/" id="Fr12">Available</a></td>
                        <td><a href="/" id="Sa12">Available</a></td>
                        <td><a href="/" id="Su12">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu123">Available</a></td>
                        <td><a href="/" id="We123">Available</a></td>
                        <td><a href="/" id="Th123">Available</a></td>
                        <td><a href="/" id="Fr123">Available</a></td>
                        <td><a href="/" id="Sa123">Available</a></td>
                        <td><a href="/" id="Su123">1Available</a></td>
                    </tr>

                    <tr>
                        <td rowSpan={2}><span>1:00</span></td>
                        <td><a href="/" id="Tu1">Available</a></td>
                        <td><a href="/" id="We1">Available</a></td>
                        <td><a href="/" id="Th1">Available</a></td>
                        <td><a href="/" id="Fr1">Available</a></td>
                        <td><a href="/" id="Sa1">Available</a></td>
                        <td><a href="/" id="Su1">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu13">Available</a></td>
                        <td><a href="/" id="We13">Available</a></td>
                        <td><a href="/" id="Th13">Available</a></td>
                        <td><a href="/" id="Fr13">Available</a></td>
                        <td><a href="/" id="Sa13">Available</a></td>
                        <td><a href="/" id="Su13">Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>2:00</span></td>
                        <td><a href="/" id="Tu2">Available</a></td>
                        <td><a href="/" id="We2">Available</a></td>
                        <td><a href="/" id="Th2">Available</a></td>
                        <td><a href="/" id="Fr2">Available</a></td>
                        <td><a href="/" id="Sa2">Available</a></td>
                        <td><a href="/" id="Su2">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu23">Available</a></td>
                        <td><a href="/" id="We23">Available</a></td>
                        <td><a href="/" id="Th23">Available</a></td>
                        <td><a href="/" id="Fr23">Available</a></td>
                        <td><a href="/" id="Sa23">Available</a></td>
                        <td><a href="/" id="Su23">Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>3:00</span></td>
                        <td><a href="/" id="Tu3">Available</a></td>
                        <td><a href="/" id="We3">Available</a></td>
                        <td><a href="/" id="Th3">Available</a></td>
                        <td><a href="/" id="Fr3">Available</a></td>
                        <td><a href="/" id="Sa3">Available</a></td>
                        <td><a href="/" id="Su3">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu33">Available</a></td>
                        <td><a href="/" id="We33">Available</a></td>
                        <td><a href="/" id="Th33">Available</a></td>
                        <td><a href="/" id="Fr33">Available</a></td>
                        <td><a href="/" id="Sa33">Available</a></td>
                        <td><a href="/" id="Su33">Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>4:00</span></td>
                        <td><a href="/" id="Tu4">Available</a></td>
                        <td><a href="/" id="We4">Available</a></td>
                        <td><a href="/" id="Th4">Available</a></td>
                        <td><a href="/" id="Fr4">Available</a></td>
                        <td><a href="/" id="Sa4">Available</a></td>
                        <td><a href="/" id="Su4">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu43">Available</a></td>
                        <td><a href="/" id="We43">Available</a></td>
                        <td><a href="/" id="Th43">Available</a></td>
                        <td><a href="/" id="Fr43">Available</a></td>
                        <td><a href="/" id="Sa43">Available</a></td>
                        <td><a href="/" id="Su43">Available</a></td>
                    </tr>
                    <tr>
                        <td rowSpan={2}><span>5:00</span></td>
                        <td><a href="/" id="Tu5">Available</a></td>
                        <td><a href="/" id="We5">Available</a></td>
                        <td><a href="/" id="Th5">Available</a></td>
                        <td><a href="/" id="Fr5">Available</a></td>
                        <td><a href="/" id="Sa5">Available</a></td>
                        <td><a href="/" id="Su5">Available</a></td>
                    </tr>
                    <tr>
                        <td><a href="/" id="Tu53">Available</a></td>
                        <td><a href="/" id="We53">Available</a></td>
                        <td><a href="/" id="Th53">Available</a></td>
                        <td><a href="/" id="Fr53">Available</a></td>
                        <td><a href="/" id="Sa53">Available</a></td>
                        <td><a href="/" id="Su53">Available</a></td>
                    </tr>
                </tbody>
            </table>    
            
        </div>

    );
}