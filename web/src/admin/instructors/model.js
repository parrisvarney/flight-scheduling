class InstructorsModel {
    constructor($q) {
        const instructors = [
            {name: 'Surojeet Ghatak', ratings: ['Private Pilot', 'Instruments']},
            {name: 'Derek LeGasse', ratings: ['Private Pilot', 'Instruments']},
            {name: 'Skip Charleston', ratings: ['Private Pilot']},
        ];

        this.$q     = $q;
        this._instructors = instructors;
    }

    get instructors() {
        return this._instructors;
    }

    addNewInstructor(name, ratings) {
        const instructor = {name, ratings};
        this._instructors.push(instructor);

        return this.$q.resolve(instructor);
    }
}
