import React from 'react';
import SpaceXCard from './../SpaceXCard/index.js' ;
import './style.css';

const LaunchList = props => (
    <div className="launch-list-conatainer">
        {props.launches.map(launchDetails => <SpaceXCard launchDetails={launchDetails}/>)}
    </div>
)

export default LaunchList;