import ListPage from './page-objects/ListPage';

const listPage = new ListPage();

fixture`List page`
.page`http://localhost:3000/`
.beforeEach( async t => {
    await listPage.stationsContainer;
});

test('filter Items', async t => {

    // filter station nodes that doesn't start with
    const stationsNotStartingBy = (prefix) =>  
        listPage.stations.filter( node => {
            return !node.innerText.startsWith(prefix);
        }, 
        { prefix }
    );

    const initialStationsCount = await listPage.stations.count;


    // filter stations by name
    await listPage.filter('T');
 
    // verify stations count less than initial count
    // assumes initial list contains items not starting with T
    await t.expect(listPage.stations.count).lt(initialStationsCount);

    // should be zero
    await t.expect(stationsNotStartingBy('T').count).eql(0);

});

test('display info', async t => {

    const station = await listPage.getStation(0);
    const stationId = await station.id();
    const info = await station.info();

    // verify that information is not visible
    await t.expect(info.count).eql(0);

    // open information
    await t.click(station.title());

    // verify correct information is visible
    await t.expect(info.count).eql(1, {timeout: 500});
    await t.expect(info.id).eql(`info-${stationId}`);

});

