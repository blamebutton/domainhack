import { InjectionKey } from "vue";
import { Store, createStore, ActionContext } from "vuex";

export type Match = {
  prefix?: string;
  domain?: string;
  suffix?: string;
};

export type DomainState = {
  input: string;
  matched: Match[];
  list: string[];
};

export const key: InjectionKey<Store<DomainState>> = Symbol();

export const store = createStore<DomainState>({
  state(): DomainState {
    return {
      input: "",
      matched: [],
      list: [],
    };
  },
  mutations: {
    setTldList(state: DomainState, payload: string[]) {
      state.list = payload;
    },
    setInput(state: DomainState, payload: string) {
      state.input = payload;
    },
    setMatched(state: DomainState, payload: Match[]) {
      state.matched = payload;
    },
  },
  actions: {
    async loadTldList(store: ActionContext<DomainState, DomainState>) {
      // Fetch the TLD list from /public/tld-list.json
      const response = await fetch("/tld-list.json");
      const list = await response.json();
      // Commit the TLD list to the store
      store.commit("setTldList", list);
    },
    updateInput(store: ActionContext<DomainState, DomainState>, input: string) {
      /* Commit the input value to the store */
      store.commit("setInput", input);
      const matched: Match[] = store.state.list
        // Filter out any empty domain inputs
        .filter((domain) => domain)
        // Make sure the domain extension is contained within the input
        .filter((domain: string) => input.toLowerCase().match(domain))
        // Map the found domain extension to a Match object
        .map((domain: string): Match => {
          /* Split the domain based on TLD found */
          const index = input.indexOf(domain);
          const prefix = input.substring(0, index);
          const suffix = input.substring(index + prefix.length, input.length);
          return { prefix, domain, suffix };
        })
        .filter((domain) => !domain.suffix);
      /* Commit the matched list to the store */
      store.commit("setMatched", matched);
    },
  },
  getters: {
    input(state: DomainState) {
      return state.input;
    },
    matches(state: DomainState) {
      return state.matched;
    },
    list(state: DomainState) {
      return state.list;
    },
  },
});
