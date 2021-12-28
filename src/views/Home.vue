<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div> -->
  <div class="home">
    <p>{{ day }}</p>
    <textarea :value="day.text" @change="updateDayProperty($event, 'text')" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/index";

//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  setup() {
    const store = useStore();

    const day = computed(() => {
      return store.state.days[0];
    });

    function updateDayProperty(e: Event, key: string) {
      store.commit("UPDATE_DAY", {
        day: day.value,
        key,
        value: (e.target as HTMLInputElement).value,
      });
    }

    return { updateDayProperty, day };
  },
});
</script>
