<template>
  <div class="flex flex-col">
    <p class="text-gray-700 text-sm font-bold mb-2">Suggested domain hacks</p>
    <a :href="getDomainUrl(match.domain)" class="match" target="_blank"
       v-bind:key="index"
       v-for="(match, index) in matched">
      <div class="mr-auto">
        <span class="domain">{{ match.prefix }}</span>.<span class="extension">{{ match.domain }}</span>
      </div>
      <div class="pricing">Pricing</div>
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
.match {
  @apply flex flex-row py-2 px-3 border-b-2 border-gray-400 w-auto;

  .domain {
    @apply text-gray-800;
  }

  .extension {
    @apply text-teal-500;
  }

  .pricing {
    @apply text-sm text-blue-400;

    &:hover {
      @apply underline text-blue-800;
    }
  }
}

</style>
