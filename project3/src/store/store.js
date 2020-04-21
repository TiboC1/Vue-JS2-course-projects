import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    stocks: [
      {
        id: 0,
        name: 'Volkswagen',
        price: 120
      },
      {
        id: 1,
        name: 'Apple',
        price: 70
      },
      {
        id: 2,
        name: 'Microsoft',
        price: 100
      },
      {
        id: 3,
        name: 'Disney',
        price: 160
      },
      {
        id: 4,
        name: 'Amazon',
        price: 25
      },
      {
        id: 5,
        name: 'Shell',
        price: 60
      },
      {
        id: 6,
        name: 'Ebay',
        price: 40
      },
      {
        id: 7,
        name: 'Dell',
        price: 125
      },
      {
        id: 8,
        name: 'Uniweb',
        price: 90
      },
      {
        id: 9,
        name: 'Asus',
        price: 190
      },
      {
        id: 10,
        name: 'Benq',
        price: 10
      },
      {
        id: 11,
        name: 'American Eagle',
        price: 170
      },
      {
        id: 12,
        name: 'KBC',
        price: 120
      },
      {
        id: 13,
        name: 'Delhaize',
        price: 100
      },
    ],
    player: {
      cash: 10000,
      portfolio: []
    },
    day: 0
  },
  getters: {
    displayStock: state => {
      return state.stocks
    },
    displayPortfolio: state => {
      return state.player.portfolio
    },
  },
  mutations: {
    buyStocks: (state, payload) => {
      let alreadyAdded = false
      if(state.player.portfolio.length === 0){
        state.player.portfolio.push(payload);
      } else {
        state.player.portfolio.forEach(el => {
          if (el.id === payload.id) {
            el.amount += parseInt(payload.amount)
            alreadyAdded = true
          }
        })
        if(!alreadyAdded) {
          state.player.portfolio.push(payload);
        }
      }
      state.player.cash -= parseInt(payload.price) * parseInt(payload.amount);
    },
    sellStocks: (state, payload) => {
      state.player.cash += (payload.price * payload.amount);
      let index = state.player.portfolio.findIndex(item => item.id === payload.id);
      state.player.portfolio[index].amount -= payload.amount;
    },
    endDay: state => {
      state.stocks.forEach(el => {
        el.price = Math.floor(Math.random() * 200 + 5);
      });
      state.day += parseInt(1)
    },
    saveGame: state => {
      localStorage.cash = state.player.cash
      localStorage.setItem("state.player.portfolio", JSON.stringify(state.player.portfolio));
      localStorage.day = state.day
    },
    loadGame: state => {
      if(confirm('Are you sure you wish to load a previous save')){
        if(localStorage.cash){
          state.player.cash = localStorage.cash
          state.player.portfolio = JSON.parse(localStorage.getItem("state.player.portfolio") || "[]");
          state.day = localStorage.day
        }
      }
    }
  },
  actions: {
    buyStocks: (context, payload) => {
      context.commit('buyStocks', payload);
    },
    sellStocks: (context, payload) => {
      context.commit('sellStocks', payload);
    },
    endDay: context => {
      context.commit('endDay');
    },
    saveGame: context => {
      context.commit('saveGame');
    },
    loadGame: context => {
      context.commit('loadGame');
    }
  