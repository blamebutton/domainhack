<script setup lang="ts">
import {Match} from '../../store'

const props = defineProps<{
  match: Match;
}>()

function getDomainLink(domain?: string): string {
	return domain ? `https://tld-list.com/tld/${domain}` : ''
}
</script>


<template>
  <a
    class="flex flex-row py-2 px-3 border-b-2 border-gray-400 w-auto"
    :href="getDomainLink(props.match.domain)"
  >
    <div class="mr-auto text-gray-800 dark:text-gray-200">
      <span>{{ props.match.prefix }}</span>
      <span>&period;</span>
      <span>{{ props.match.domain }}</span>
    </div>
    <div
      class="
        text-sm text-blue-400
        dark:text-blue-300
        hover:underline hover:text-blue-600
        dark:hover:text-blue-400
      "
    >
      Pricing
    </div>
  </a>
</template>
