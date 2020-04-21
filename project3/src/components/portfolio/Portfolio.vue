<template>
  <div class="container">
    <h2 class="m-2">Portfolio</h2>
    <div class="row" v-if="checkIfEmpty">
      <app-stock class="col-sm-5 col-lg-3" :stock=stock v-for="(stock, index) in checkAmount" :key="index"></app-stock>
    </div>
    <div class="card p-2 mt-5" v-else>
      <p class="mt-2">Your Portfolio is empty right now.</p>
      <router-link class="btn btn-primary m-auto" to="/market">Buy stocks</router-link>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import { mapGetters } from 'vuex'
import Stock from './Stock'

  export default {
    computed: {
      ...mapGetters([
        'displayPortfolio'
      ]),
      checkAmount() {
        return this.displayPortfolio.filter(item => item.amount > 0);
      },
      checkIfEmpty() {
        return this.checkAmount.length > 0;
      }
    },
    components: {
      appStock: Stock
    }
  }
</script>

<style scoped>

</style>
