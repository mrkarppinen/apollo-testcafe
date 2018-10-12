
import React from 'react';
import PropTypes from 'prop-types';
import StationContainer from '../container/StationContainer';

const StationList = ({stations, filter}) => (
    <div id="stations" >
        {stations
            .filter( station => filter.length >  0 ? station.name.startsWith(filter) : true )
            .sort( (st1, st2) => {
                if (st1 === st2)
                    return 0;

                return st1.name < st2.name ? -1 : 1;  
            })
            .map( station => <StationContainer key={station.stationId} {...station}  /> ) }
    </div>
);

StationList.propTypes = {
    stations: PropTypes.arrayOf(PropTypes.shape({
        stationId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        bikesAvailable: PropTypes.number.isRequired,
        spacesAvailable: PropTypes.number.isRequired,
        state: PropTypes.string.isRequired,
        realtime: PropTypes.bool.isRequired
     })),
    filter: PropTypes.string
};

export default StationList;

