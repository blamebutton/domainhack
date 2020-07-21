import Vue from "vue";
import Vuex, {ActionContext} from "vuex";
import {DomainState, Match} from "@/store/types";

Vue.use(Vuex);

export default new Vuex.Store<DomainState>({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    input: '',
    matched: [],
    list: [],
  },
  mutations: {
    'tld-list:set': (state, payload: string[]) => state.list = payload,
    'input:set': (state, payload: string) => state.input = payload,
    'matched:set': (state, payload: Match[]) => state.matched = payload,
  },
  actions: {
    'tld-list:load': async (store: ActionContext<DomainState, DomainState>) => {
      // Fetch the TLD list from /public/tld-list.json
      const response = await fetch('/tld-list.json');
      const list = await response.json();
      // Commit the TLD list to the store
      store.commit('tld-list:set', list);
    },
    'input:update': (store: ActionContext<DomainState, DomainState>, input: string) => {
      /* Commit the input value to the store */
      store.commit('input:set', input);
      const matched: Match[] = store.state.list
        // Filter out any empty domain inputs
        .filter(domain => domain)
        // Make sure the domain extension is contained within the input
        .filter((domain: string) => input.toLowerCase().match(domain))
        // Map the found domain extension to a Match object
        .map((domain: string): Match => {
          /* Split the domain based on TLD found */
          const index = input.indexOf(domain);
          const prefix = input.substring(0, index);
          const suffix = input.substring(index + prefix.length, input.length);
          return {prefix, domain, suffix};
        })
        .filter(domain => !domain.suffix);
      /* Commit the matched list to the store */
      store.commit('matched:set', matched);
    }
  },
  getters: {
    input: (state: DomainState): string => state.input,
    matched: (state: DomainState): Match[] => state.matched,
    list: (state: DomainState): string[] => state.list,
  }
});
