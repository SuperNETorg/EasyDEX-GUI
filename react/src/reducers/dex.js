// charts data(?)

import {
  DEX_LOGIN,
  DEX_ASKS,
  DEX_BIDS,
  DEX_SWAPS,
  DEX_ADD_COIN,
  DEX_REMOVE_COIN,
  DEX_INVENTORY,
  DEX_UTXO,
  DEX_CACHE_PRELOAD,
  DEX_RESET,
  DEX_PRICES,
  DEX_STATS,
} from '../actions/storeType';

export function Dex(state = {
  display: false,
  isAuth: false,
  asks: [],
  bids: [],
  pair: {
    rel: null,
    base: null,
  },
  coins: {},
  swaps: [],
  rates: {},
  prices: {},
  utxo: {},
  inventory: {},
  stats: {}
}, action) {
  switch (action.type) {
    case DEX_CACHE_PRELOAD:
      return {
        isAuth: action.isAuth,
        asks: action.asks,
        bids: action.bids,
        pair: action.pair,
        coins: action.coins,
        swaps: action.swaps,
        rates: action.rates,
        prices: action.prices,
        utxo: action.utxo,
        inventory: action.inventory,
      };
    case DEX_RESET:
      return {
        display: false,
        isAuth: false,
        asks: [],
        bids: [],
        pair: {
          rel: null,
          base: null,
        },
        coins: {},
        swaps: [],
        rates: {},
        prices: {},
        utxo: {},
        inventory: {},
      };
    case DEX_LOGIN:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    case DEX_ASKS:
      return {
        ...state,
        asks: action.asks,
      };
    case DEX_BIDS:
      return {
        ...state,
        bids: action.bids,
      };
    case DEX_ADD_COIN:
      return {
        ...state,
      };
    case DEX_REMOVE_COIN:
      return {
        ...state,
      };
    case DEX_SWAPS:
      return {
        ...state,
        swaps: action.swaps,
      };
    case DEX_INVENTORY:
      return {
        ...state,
        inventory: action.inventory,
      };
    case DEX_UTXO:
      return {
        ...state,
        utxo: action.utxo,
      };
    case DEX_PRICES:
      return {
        ...state,
        prices: action.prices,
      };
    case DEX_STATS:
      return {
        ...state,
        stats: action.stats,
      };
    default:
      return state;
  }
}

export default Dex;