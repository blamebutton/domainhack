<script setup lang="ts">
import {computed} from '@vue/reactivity'
import {useStore} from 'vuex'
import {DomainState, key} from '../store'
import InputField from './search/InputField.vue'
import MatchList from './match/MatchList.vue'
import NoInput from './search/NoInput.vue'
import NoMatch from './search/NoMatch.vue'

const store = useStore<DomainState>(key)

const matches = computed(() => store.getters.matches.length > 0)
const input = computed(() => !!store.getters.input)
</script>

<template>
  <div class="w-full bg-white dark:bg-gray-800 rounded shadow">
    <InputField class="px-6 py-4" />
    <MatchList
      v-if="matches"
      class="px-6 pb-4"
    />
    <NoMatch
      v-else-if="input"
      class="px-6 pb-4"
    />
    <NoInput
      v-else
      class="px-6 pb-4"
    />
  </div>
</template>
