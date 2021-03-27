const watcherComputedMethod = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: '',
            // fullname: '',
        }
    },
    watch: {
        counter(value) {
            if (value > 50) {
                this.counter = 0;
            }
        }
        // name(value) {
        //     this.fullname = value === '' ? '' : value + ' ' + this.lastName;
        // },
        // lastName(value) {
        //     this.fullname = value === '' ? '' : this.name + ' ' + value;
        // }
    },
    computed: {
        fullName() {
            if (this.name == '' || this.lastName == '') {
                return '';
            } else {
                return this.name + ' ' + this.lastName;
            }
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
        },
        setName(event, lastName) {
            this.name = event.target.value;
        },
        confirmInput() {
            this.confirmedName = this.name;
        },
        resetInput() {
            this.name = '';
        },
        outputFullName() {
            return this.name === '' ? this.name : this.name + ' Le Thanh';
        }
    }
});
watcherComputedMethod.mount('#events');
