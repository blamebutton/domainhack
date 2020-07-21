<template>
  <div class="flex flex-col">
    <a :href="getDomainUrl(match.domain)" class="anchor" target="_blank"
       v-bind:key="index"
       v-for="(match, index) in matched">
      {{ match.prefix }}.<span class="link">{{ match.domain }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Match} from '@/store/types';

@Component({
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
.anchor {
  @apply block py-2 px-3 border-b-2 border-gray-400 w-auto;

  &:hover {
    @apply underline;
  }

  .link {
    @apply no-underline text-blue-500;
  }
}

</style>
