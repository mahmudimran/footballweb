import React from 'react';
import './League.css'

const League = (props) => {
    console.log(props)
    const {strLeague,strSport} = props.league
    return (
        <div className="league">
            <h5>{strLeague}</h5>
            <p>Sport Type : {strSport}</p>
        </div>
    );
};

export default League;