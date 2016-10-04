class FleetModel {
    constructor($q) {
        const testAircraft = [
            {tailNumber: 'N8092H', make: 'Piper', model: 'Warrior II', color: 'White Blue Gold'},
            {tailNumber: 'N3021C', make: 'Piper', model: 'Warrior II', color: 'White Blue Red'},
            {tailNumber: 'N276ND', make: 'Piper', model: 'Warrior III', color: 'Green Beige'}
        ];

        this.$q     = $q;
        this._fleet = testAircraft;
    }

    get fleet() {
        return this._fleet;
    }

    addNewAircraft(tailNumber, make, model, color) {
        const aircraft = {tailNumber, make, model, color};
        this._fleet.push(aircraft);

        return this.$q.resolve(aircraft);
    }
}
