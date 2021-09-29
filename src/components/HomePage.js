import React from "react";

function HomePage() {
    return (
        <div class="cd-main-header text-center flex flex-column flex-center">
            <div>
                <button class="btn btn-primary" onClick=""><h4>View Lesson Schedule</h4></button>
                <button class="btn btn-primary" onClick=""><h4>Riding Instructors</h4></button>
                <button class="btn btn-primary" onClick=""><h4>New Rider Enrollment</h4></button>
                <button class="btn btn-primary" onClick=""><h4>Participating Students</h4></button>
            </div>
        </div>
    )
}

export default HomePage;