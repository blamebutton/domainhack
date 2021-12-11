<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { DomainState, key, Match } from "../../store";
import MatchListItem from "./MatchListItem.vue";

const store = useStore<DomainState>(key);

const matches = computed((): Match[] => store.getters.matches);
</script>

<template>
  <div class="flex flex-col">
    <p class="text-gray-700 dark:text-gray-400 text-sm font-bold mb-2">
      Suggested domain hacks
    </p>
    <MatchListItem
      v-for="(match, index) in matches"
      v-bind:key="index"
      :match="match"
    />
  </div>
</template>