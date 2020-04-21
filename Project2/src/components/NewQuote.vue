<template>
    <div>
        <form class="form-group">
            <label for="quote">Quote</label>
            <textarea class="form-control" name="quote" id="quote" placeholder="Write your quote here." v-model="quote"></textarea>
            <p class="error m-3 p-2" v-if="error.state">{{error.message}}</p>
            <button class="btn btn-primary m-3" @click.prevent="newQuote">Add Quote</button>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                quote: ''
            }
        },
        props: ['error'],
        methods: {
            newQuote() {
                this.$emit('quoteAdded', this.quote);
                this.quote = '';
            }
        }
    }
</script>

<style scoped>
    .error{
        border: red 2px solid;
        border-radius: 5px;
        color: red;
        width: 200px;
        text-align: center;
    }
</style>