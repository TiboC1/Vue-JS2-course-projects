<template>
  <div>
    <div class="card p-2 mt-2">
      <h5 class="card-title">{{ stock.name }}</h5>
      <p class="card-text">Amount of shares owned: {{ stock.amount }}</p>
      <p class="card-text">Sell Price: ${{ correctPrice }}</p>
      <label :for="stock.name">Amount to sell:</label>
      <input :id="stock.name" class="m-2 form-number text-center" type="text" v-model.number="amount" min="0" :max="maxAmount" step="1">
      <p>projected profit: ${{correctPrice * this.amount}}</p>
      <button class="btn btn-primary m-auto" @click="sellHandler({id: stock.id, name: stock.name, price: correctPrice, amount: amount})">Sell stocks</button>
    </div>
  </div>
</template>

<script>/* eslint-disable */
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  props: ['stock'],
  data() {
    return {
      amount: 0
    }
  },
  computed: {
    maxAmount() {
      return this.stock.amount
    },
    correctPrice(){
      return this.displayStock[this.stock.id].price
    },
    ...mapGetters([
      'displayStock',
    ])
  },
  methods: {
    ...mapActions([
      'sellStocks',
    ]),
    resetAmount() {
      this.amount = 0
    },
    sellHandler(payload) {
      if (this.amount > this.stock.amount){
        return false
      } else {
        this.sellStocks(payload);
        this.resetAmount()
      }
    }
  },
}


</script>

<style scoped>

</style>
