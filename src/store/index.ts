import Vue from 'vue';
import Vuex from 'vuex';
import {DomainState, Match} from "@/store/types";

Vue.use(Vuex);

export default new Vuex.Store<DomainState>({
  strict: process.env.NODE_ENV !== 'production',
  modules: {},
  state: {
    input: '',
    matched: [],
    list: [],
  },
  mutations: {
    'set-tld-list': (state, payload: string[]) => {
      state.list = payload;
    },
    'set-input': (state, payload: string) => {
      state.input = payload;
    },
    'set-matched': (state, payload: Match[]) => {
      state.matched = payload;
    },
  },
  actions: {
    'load-tld-list': async store => {
      const response = await fetch('/tld-list.json');
      const list = await response.json();
      store.commit('set-tld-list', list);
    },
    'input-update': (store, input: string) => {
      store.commit('set-input', input);

      const matched: Match[] = [];

      store.getters.list.forEach((domain: string) => {
        if (!input) return;
        if (!input.toLowerCase().match(domain)) return;

        const index = input.indexOf(domain);
        const prefix = input.substring(0, index);
        const suffix = input.substring(index + domain.length, input.length);

        const match = {prefix, domain, suffix};
        matched.push(match);
        console.log(match);
      });

      store.commit('set-matched', matched);
    }
  },
  getters: {
    input: state => state.input,
    list: state => state.list,
    matched: state => state.matched,
  }
});
