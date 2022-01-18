<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div> -->
  <div class="">
    <div
      v-for="day in week"
      :key="day.day"
      class="bg-blue-400 shadow-md p-1 m-1 rounded text-left"
    >
      <div class="p-1">{{ day }}</div>
      <div class="p-1"><textarea
        :value="day.text"
        @change="updateDayProperty($event, day, 'text')"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store/index";
import { calendarDay } from "@/models/calendarday";

//import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  setup() {
    const store = useStore();

    const week = computed(() => {
      return store.state.week;
    });

    function updateDayProperty(
      e: Event,
      calendarDay: calendarDay,
      key: string
    ) {
      store.commit("UPDATE_DAY", {
        calendarDay: calendarDay,
        key,
        value: (e.target as HTMLInputElement).value,
      });
    }

    return { updateDayProperty, week };
  },
});
</script>
