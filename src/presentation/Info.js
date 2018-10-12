import React from 'react';

const Info = ({stationId, bikesAvailable, spacesAvailable}) => (
    <div className="info" id={`info-${stationId}`}>
        <span>{bikesAvailable} / { (bikesAvailable + spacesAvailable ) }</span>
    </div>
);

export default Info;