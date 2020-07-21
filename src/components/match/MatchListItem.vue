<template>
  <a :href="getDomainUrl(item.domain)" class="flex flex-row py-2 px-3 border-b-2 border-gray-400 w-auto" target="_blank">
    <div class="mr-auto text-gray-800 dark:text-gray-200">
      <span>{{ item.prefix }}</span>
      <span>&period;</span>
      <span>{{ item.domain }}</span>
    </div>
    <div class="text-sm text-blue-400 dark:text-blue-300 hover:underline hover:text-blue-600 dark:hover:text-blue-400">Pricing</div>
  </a>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {Match} from "@/store/types";

@Component({
  props: {
    item: {
      type: Object as () => Match,
    }
  }
})
export default class MatchItem extends Vue {
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
  @apply ;

  .domain {
    @apply ;

    .prefix {
      @apply ;
    }

    .separator {
      @apply ;
    }

    .extension {
      @apply text-gray-800;
    }
  }

  .pricing {
    @apply text-sm text-blue-400;

    &:hover {
      @apply underline text-blue-800;
    }
  }
}
</style>
