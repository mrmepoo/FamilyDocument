<template>
    <li>
        <h2>{{name}} {{isFavorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>

        <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{phone}}</li>
            <li><strong>Email:</strong> {{email}}</li>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
    export default {
        emits: ['toggle-favorite', 'delete-friend'],
        // props: ['name', 'phone', 'email'],
        props: {
            id: {type: String, required: true},
            name: {type: String, required: true},
            phone: {type: String, required: true},
            email: {type: String, required: true},
            isFavorite: {
                type: Boolean,
                default: false,
                // validator(value) {
                //     return value === '1' || value === '0'
                // }
            }
        },
        data() {
            return {
                detailsAreVisible: false
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavorite() {
                this.$emit('toggle-favorite', this.id);
            },
            deleteFriend() {
                this.$emit('delete-friend', this.id);
            }
        }
    }
</script>

<style scoped>

</style>
