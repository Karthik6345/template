import React from "react";
import { Link } from "react-router-dom";
//testing 
// import CounterContainer from "../../containers/CounterContainer";

const Home = () => {
    return (
        <>
            <p>Times Foodie</p>
            {/* <CounterContainer /> */}
            <Link to="about">About</Link>
        </>
    );
};

export default Home;
