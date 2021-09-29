import React from 'react';
import HomePage from './HomePage'
import MyHeader from './MyHeader';

import '../styles/header.css';

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
            <MyHeader currentPage={props.currPg} handlePageChange={handlePageChange} />            
            <main class="container container-fluid mt-5">
                <header class="cd-main-header text-center flex flex-column flex-center">
                    <h1 class="text-xl">{ props.farmName}</h1><br />
                    <h2 class="text-xl">{ props.task}</h2>
                </header>
                <hr style={{ border: '3px solid rgb(6, 53, 35)', borderradius: '5px'}} />
            </main>
            {renderNavigaition()}
        </div>
    );
}


