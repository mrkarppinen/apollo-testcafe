import React from 'react';
import PropTypes from 'prop-types';
import Info from '../presentation/Info';

export default class StationContainer extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            displayInfo: false
        };

        this.toggleInfo = this.toggleInfo.bind(this);
    }
   
    toggleInfo (){ 
        this.setState({
            displayInfo: !this.state.displayInfo
        });
     } 

    render(){
        const {stationId,name, bikesAvailable, spacesAvailable} = this.props;

        return (
            <div className="station" id={`station-${stationId}`} >
                <p onClick={ this.toggleInfo } style={{cursor: 'pointer'}}  >{name}</p>
                { this.state.displayInfo && 
                    <Info 
                        stationId={stationId} 
                        bikesAvailable={bikesAvailable} 
                        spacesAvailable={spacesAvailable} 
                    /> 
                }
            </div>
        );
    }
}


