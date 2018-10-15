import { Selector, t } from 'testcafe';


export default class ListPage {
    constructor(){
        this.stationsContainer = Selector('#stations');
        this.stations = this.stationsContainer.find('.station');
        this.filterInput = Selector('input[name="filter"]');
    }

    getStation(index) {
        return Promise.resolve(new Station(this.stations.nth(index)));
    }

    filter(text){
        return t.typeText(this.filterInput, text);
    }


}

class Station {

    constructor(container){
        this.container = container;
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