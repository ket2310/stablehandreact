import React from 'react';
import HomePage from './HomePage'
import MyHeader from './MyHeader';

import '../styles/app.css';

export default function MainContainer(props) {
     const currPg = props.currentPg;
    console.log(currPg)

    const renderNavigaition = () => {
        if (currPg === "HomePage") {
            return (
                <HomePage />
            )
        }
    };

    const handlePageChange = (page) => props.setPage(page);


    return (
        <div className="MyApp">
            {/* We are passing the currentPage from state and the function to update it */}
            <MyHeader currentPage={props.currPg} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderNavigaition()}
           
        </div>
    );
}

 
