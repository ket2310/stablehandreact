import React from "react";
import "../styles/lesson.css"

function lessonForm (props){

    return (props.trigger) ? (
        <div className="popup">
        <div className="popup-content">
            <span className="close-btn" onClick={() => props.setTrigger(false)}>&times;</span>
            {props.children}
        </div>
    </div>
    ) : "" ;     
}

export default lessonForm;  