import { createStore, useStore as baseUseStore, Store } from "vuex";
import { InjectionKey } from "vue";
import { calendarWeek } from "@/models/calendarday";
import { loadWeek, saveWeek } from "@/services/calendarService";

const week = loadWeek(new Date(2021, 11, 27));

export interface State {
  week: calendarWeek;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  plugins: [saveStatePlugin],
  state: {
    week,
  },
  mutations: {
    UPDATE_DAY(state, { calendarDay: calendarDay, key, value }) {
      calendarDay[key] = value;
    },
  },
  actions: {},
  modules: {},
});

export function useStore(): Store<State> {
  return baseUseStore(key);
}

function saveStatePlugin(store: Store<State>): void {
  store.subscribe((mutation, state) => {
    saveWeek(state.week);
  });
}
