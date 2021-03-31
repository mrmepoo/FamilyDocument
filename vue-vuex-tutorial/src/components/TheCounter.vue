<template>
    <h2>{{getCountValue}}</h2>
</template>

<script>
    export default {
        name: "TheCounter",
        computed: {
            getCountValue() {
                return this.$store.state.counter;
            }
        },
    }
</script>

<style scoped>

</style>
