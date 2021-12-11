<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import { useStore } from "vuex";
import { DomainState, key } from "./store";
import Search from "./components/Search.vue";
import Explanation from "./components/Explanation.vue";

const store = useStore<DomainState>(key);

store.dispatch("loadTldList");
</script>

<template>
  <div
    class="
      p-4
      bg-gray-300
      dark:bg-gray-900
      h-full
      flex flex-col
      justify-start
      sm:justify-center
      items-center
    "
  >
    <Explanation class="mb-4 sm:w-8/12 md:w-6/12 lg:w-1/3 xl:w-1/4" />
    <Search class="sm:w-8/12 md:w-6/12 lg:w-1/3 xl:w-1/4" />
  </div>
</template>
