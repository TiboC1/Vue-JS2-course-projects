import Home from "./components/Home.vue";
import Market from "./components/Market.vue";
import Portfolio from "./components/Portfolio.vue";
import Transaction from "./components/Transaction.vue";

export const routes = [
  {path: '/', component: Home},
  {path: '/market', component: Market},
  {path: '/portfolio', component: Portfolio},
  {path: '/transaction', component: Transaction}

];
