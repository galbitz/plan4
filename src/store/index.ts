import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";
import defaultDays from "@/default-planner";
import { day } from "@/models/day";
import { saveStatePlugin } from "@/utils";

const storage = localStorage.getItem("days");

const days: day[] = storage
  ? JSON.parse(localStorage.getItem("days") || "") || defaultDays
  : defaultDays;

export interface State {
  days: day[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: [saveStatePlugin],
  state: {
    days,
  },
  mutations: {
    UPDATE_DAY(state, { day: day, key, value }) {
      day[key] = value;
    },
  },
  actions: {},
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}
