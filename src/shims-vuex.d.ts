import { Store } from "@/store/index";
import { day } from "@/models/day";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<day[]>;
  }
}
