import ListPage from './page-objects/ListPage';

const listPage = new ListPage();

fixture`List page`
.page`http://localhost:3000/`
.beforeEach( async t => {
    await listPage.stationsContainer;
});

test('filter Items', async t => {

    // initial stations count
    const stationsCount = await listPage.stations.count;

    // filter stations by name
    await t.typeText(listPage.filterInput, 'T');

    const stationsCountAfterFilter = listPage.stations.count;

    // verify stations count less than initial count
    // assumes initial list contains items not starting with T
    await t.expect(stationsCountAfterFilter).lt(stationsCount);

    // filter station nodes that doesn't start with T 
    const nodes = await listPage.stations.filter( node => {
            return !node.innerText.startsWith('T');
    });

    // should be zero
    await t.expect(nodes.count).eql(0);

});

test('display info', async t => {

    const station = await listPage.getStation(0);
    const stationId = await station.id();
    const info = await station.info();

    // verify that information is not visible
    await t.expect(info.count).eql(0);

    // open information
    await t.click(station.title()).wait(500);

    // verify correct information is visible
    await t.expect(info.count).eql(1);
    await t.expect(info.id).eql(`info-${stationId}`);

});

