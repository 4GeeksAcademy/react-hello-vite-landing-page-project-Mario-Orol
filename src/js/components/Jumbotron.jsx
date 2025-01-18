import React from "react";


//create your first component
const Jumbotron = () => {
    return (
        <div className="jumbotron bg-light px-4 pb-4 rounded">
            <h1 className="display-4">Discover Your Next Adventure!</h1>
            <p className="lead">Explore breathtaking destinations, unforgettable experiences, and custom-tailored vacations.</p>
            <p className="lead">
                <a className="btn btn-primary btn-lg" href="#" role="button">Get Started!</a>
            </p>
        </div>
    );
};

export default Jumbotron;