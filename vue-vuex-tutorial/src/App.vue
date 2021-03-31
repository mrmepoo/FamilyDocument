<template>
    <base-container title="Vuex">
        <the-counter></the-counter>
        <button @click="addOne">Add 1</button>
    </base-container>
</template>

<script>

    import BaseContainer from "./components/BaseContainer";
    import TheCounter from "./components/TheCounter";

    export default {
        name: 'App',
        components: {
            TheCounter,
            BaseContainer
        },
        methods: {
            addOne() {
                // this.$store.commit('increment');
                this.$store.commit('increment', {value: 1});
            }
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
