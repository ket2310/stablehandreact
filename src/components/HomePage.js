import React, { useState } from 'react';
import LessonSchedule from '../pages/wklySchedule'

function HomePage() {
    const [task, setTask] = useState('');

    const handlePageChange = (page) => {
        setTask(page)
    }

    const goToTask = () => {
        if (task === 'schedule'){
            return (<LessonSchedule />)
        }

    }

    return (
        <div className="cd-main-header text-center flex flex-column flex-center">
            <div>
            <button className="btn btn-lg btn-light m-2" onClick={() => handlePageChange('schedule')}>
            <h4>View Lesson Schedule</h4>
            </button>
                
                <button className="btn btn-primary" onClick=""><h4>Riding Instructors</h4></button>
                <button className="btn btn-primary" onClick=""><h4>New Rider Enrollment</h4></button>
                <button className="btn btn-primary" onClick=""><h4>Participating Students</h4></button>
            </div>
            {goToTask()}
        </div>
    )
}

export default HomePage;