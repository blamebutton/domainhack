<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { DomainState, key } from "../../store";

const store = useStore<DomainState>(key);

const input = computed({
  get: () => store.getters.input,
  set: (value) => store.dispatch("updateInput", value),
});
</script>

<template>
  <div class="w-full">
    <label
      class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2"
      for="domain"
    >
      Domain
    </label>
    <input
      autocomplete="off"
      autofocus
      class="
        shadow
        appearance-none
        border
        dark:border-none
        bg-white
        dark:bg-gray-600
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        dark:text-gray-200
        focus:outline-none focus:ring
        transition
        duration-300
      "
      id="domain"
      placeholder="john-deer"
      type="text"
      v-model="input"
    />
  </div>
</template>