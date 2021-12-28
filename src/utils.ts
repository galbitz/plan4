import { State } from "@/store/index";
import { Store } from "vuex";

export function saveStatePlugin(store: Store<State>): void {
  store.subscribe((mutation, state) => {
    localStorage.setItem("days", JSON.stringify(state.days));
  });
}
