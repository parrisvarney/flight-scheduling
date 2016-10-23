export default class InstructorsController {
    /**
     * @param {$state} $state
     * @param {InstructorsModel} InstructorsModel
     */
    constructor($state, InstructorsModel) {
        this.$state     = $state;
        this.InstructorsModel = InstructorsModel;
    }

    addNewInstructor(name, ratings) {
        this.InstructorsModel
            .addNewInstructor(name, ratings)
            .then(instructor => {
                alert(instructor.name + " was successfully added.");

                this.$state.go('instructors');
            });
    }
}
