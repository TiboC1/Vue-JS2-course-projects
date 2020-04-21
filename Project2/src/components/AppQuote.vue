<template>
        <div class="row col-12">
            <div class="col-sm-3 card" v-for="(quote, index) in quotes" :key="quote.id"  @click="deleteQuote(index)">
                <div class="card-body">
                    <p class="card-text font-italic">"{{ quote }}"</p>
                </div>
            </div>
        </div>
</template>
<script>
    export default {
        props: {
            quotes: {
                type: Array
            }
        },
        methods: {
            deleteQuote(index){
                this.quotes.splice(index, 1);
                this.$emit('quoteDeleted');
            }
        },
    }
</script>
<style scoped>
    .card {
       font-size: 16px;
        padding: 10px;
        margin: 20px;
        font-family: fantasy;
    }
    .card:hover{
        background-color: rgba(255, 251, 161, 0.1);
        border: black 1px solid;
    }
</style>