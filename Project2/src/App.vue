<template>
    <div class="container">
        <h1 class="p-2 m-2 text-center">Quotes Added</h1>
        <div class="quotesCounter">
            <div class="quotesAdded" :style="quotesWidth">{{quotesNumber.number}}/{{ maxQuotes }}0</div>
        </div>
        <app-new-quote :error="error" @quoteAdded="addQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
        <div class="text-center card m-2 p-3 blue">
            <p>info: click on a quote to delete it.</p>
        </div>
    </div>
</template>

<script>
    import AppQuote from './components/AppQuote.vue'
    import NewQuote from "./components/NewQuote.vue";
    export default {
        data(){
            return {
                quotes: ['example quote'],
                maxQuotes: 10,
                error: {
                    state: false,
                    message: ""
                }
            }
        },
        computed: {
            quotesNumber() {
                return {
                    number: this.quotes.length
                }
            },
            quotesWidth() {
                return {
                    width: this.quotesNumber.number * 10 + '%'
                }
            }
        },
        components: {
            AppQuoteGrid: AppQuote,
            AppNewQuote: NewQuote
        },
        methods: {
            addQuote(quote) {
                if(this.quotesNumber.number < this.maxQuotes){
                    if(quote){
                        this.quotes.push(quote);
                        this.error.state = false;
                    } else {
                        this.error.state = true;
                        this.error.message = "please fill in the form";
                    }

                } else {
                    this.error.state = true;
                    this.error.message = "Quotes at maximum, please delete one."
                }
            },
            deleteQuote() {
                this.quotesNumber.number = this.quotes.length
            },
        }
    }
</script>

<style>
    .quotesCounter{
        width: 100%;
        background-color: #eee;
        margin: auto;
        text-align: center;
    }
    .quotesAdded{
        background-color: cornflowerblue;
        transition: width 500ms;
    }
    .blue {
        background-color: rgba(127, 255, 212, 0.5);
    }

</style>
