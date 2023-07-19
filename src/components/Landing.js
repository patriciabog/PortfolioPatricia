import { React, Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="landing">
            <h1 className="landing__title">Frontend developer</h1>
            <h3 className="landing__subtitle">My name is //Patricia</h3>
            <p className="landing__p">Passionate Frontend Developer Eager to Expand Skills and Embrace New Challenges.</p>
            <div className="landing__bubbles"> 
                <div className="bubble"></div>
                <div className="bubble bubble1"></div> 
            </div>
            <Link to='/about'> 
            <button className="landing__btn">Click here to see more!</button>
            </Link>
        
        </div>
    );
};

export default Landing;