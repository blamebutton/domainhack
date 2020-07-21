<template>
  <div class="flex flex-col">
    <p class="text-gray-700 dark:text-gray-400 text-sm font-bold mb-2">Suggested domain hacks</p>

    <MatchItem :item="match" v-bind:key="index" v-for="(match, index) in matched"></MatchItem>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Match} from '@/store/types';
import MatchItem from "@/components/match/MatchListItem.vue";

@Component({
  components: {MatchItem},
  computed: {
    matched: function (): Match[] {
      return this.$store.getters['matched'];
    }
  }
})
export default class MatchList extends Vue {
  /**
   * Format the domain URL link to buy the TLD.
   * @param {string} tld
   */
  getDomainUrl(tld: string): string {
    return `https://tld-list.com/tld/${tld}`;
  }
}
</script>

<!--suppress CssInvalidAtRule -->
<style lang="scss" scoped>

</style>
