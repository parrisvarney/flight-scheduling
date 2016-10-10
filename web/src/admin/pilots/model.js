class PilotsModel {
    constructor($q) {
        const testPilots = [
            {fullName: 'Parris Varney', address: '54 Appleton St', ratings: ['Private Pilot'], current: true},
            {fullName: 'Kerri Varney', address: '54 Appleton St', ratings: ['Private Pilot'], current: true},
            {fullName: 'Parris Varney Jr', address: '54 Appleton St', ratings: ['Private Pilot'], current: true},
            {fullName: 'Wes Varney', address: '54 Appleton St', ratings: ['Private Pilot'], current: true},
            {fullName: 'Buddah Varney', address: '54 Appleton St', ratings: ['Private Pilot'], current: true},
        ];

        this.$q      = $q;
        this._pilots = testPilots;
    }

    get pilots() {
        return this._pilots;
    }

    addNewPilot(fullName, address, ratings, current) {
        const aircraft = {fullName, address, ratings, current};
        this._pilots.push(aircraft);

        return this.$q.resolve(aircraft);
    }
}
