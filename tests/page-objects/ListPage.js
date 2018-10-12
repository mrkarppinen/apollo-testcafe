import { Selector, t } from 'testcafe';


export default class ListPage {
    constructor(){
        this.stationsContainer = Selector('#stations');
        this.stations = Selector('#stations .station');
        this.filterInput = Selector('input[name="filter"]');
    }

    getStation(index) {
        return Promise.resolve(new Station(index));
    }


}

class Station {

    constructor(index){
        this.container = Selector(`#stations .station:nth-of-type(${++index})`);
    }

    id(){
        return this.container.id.then( id => 
            // parse station id from container id, format "station-[number]"
            id.match(/\d+/)[0]
        );
    }

    title(){
        return this.container.find('p');
    }

    info(){
        return this.container.find('.info');
    }

}