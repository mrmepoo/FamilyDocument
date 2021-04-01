<template>
    <section>
        <base-card>
            <h2>Submitted Experiences</h2>
            <div>
                <base-button @click="getSurveyData">Load Submitted Experiences</base-button>
            </div>
            <p v-if="isLoading">Loading...</p>
            <p v-else-if="!isLoading && error">{{error}}</p>
            <p v-else-if="!isLoading && (!results || results.length == 0)">No data found</p>
            <ul v-else>
                <survey-result
                        v-for="item of results"
                        :key="item.id"
                        :name="item.name"
                        :rating="item.rating">
                </survey-result>
            </ul>
        </base-card>
    </section>
</template>

<script>
    import BaseCard from "../UI/BaseCard";
    import BaseButton from "../UI/BaseButton";
    import SurveyResult from "./SurveyResult";

    export default {
        name: "UserExperiences",
        components: {SurveyResult, BaseButton, BaseCard},
        data() {
            return {
                results: [],
                isLoading: false,
                error: null
            }
        },
        methods: {
            getSurveyData() {
                this.isLoading = true;
                this.error = null;
                fetch('https://vue-http-demo-2c361-default-rtdb.firebaseio.com/survey.json').then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                }).then(data => {
                    this.isLoading = false;
                    const results = [];
                    for (const id in data) {
                        results.push({id: id, name: data[id].name, rating: data[id].rating});
                    }
                    this.results = results;
                }).catch(error => {
                    console.log(error);
                    this.isLoading = false;
                    this.error = 'Failed to catch data, please try again!';
                });
            }
        },
        mounted() {
            this.getSurveyData();
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
