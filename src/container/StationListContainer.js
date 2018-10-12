import React from 'react';
import PropTypes from 'prop-types';
import StationList from '../presentation/StationList';
import FilterForm from '../presentation/FilterForm';

export default class StationListContainer extends React.Component {

    static propTypes = {
        station: PropTypes.array
    };

    constructor(props){
        super(props);

        this.state = {
          filter: ''
        };
    
        this.onInput = this.onInput.bind(this);
      }
    
      onInput(value) {
        this.setState({filter: value});
      }

    render(){
        return (
            <div className="App">
                <FilterForm onInput={ this.onInput } />
                <StationList stations={this.props.stations } filter={this.state.filter} />
            </div>
        );
    }

}