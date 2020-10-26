<template>
  <div class="flex flex-col">
    <p class="text-gray-700 dark:text-gray-400 text-sm font-bold mb-2">Suggested domain hacks</p>

    <MatchListItem :item="item" v-bind:key="i" v-for="(item, i) in matches"></MatchListItem>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Match} from '@/store/types';
import MatchListItem from "@/components/match/MatchListItem.vue";

@Component({
  components: {MatchListItem},
  computed: {
    matches(): Match[] {
      return this.$store.getters.matches;
    }
  }
})
export default class MatchList extends Vue {
}
</script>
