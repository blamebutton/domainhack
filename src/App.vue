<template>
  <div class="p-4 bg-gray-700 h-full flex flex-col justify-start sm:justify-center items-center">
    <div class="bg-white rounded shadow-xl w-full sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
      <DomainInput class="px-6 py-4"></DomainInput>
      <MatchList class="px-6 pb-4" v-if="hasMatches"></MatchList>
      <div class="px-6 pb-4" v-else-if="hasInput">No matches</div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import DomainInput from "@/components/DomainInput.vue";
import MatchList from "@/components/MatchList.vue";

@Component({
  components: {MatchList, DomainInput},
  computed: {
    hasInput: function(): boolean {
      return this.$store.getters['input'];
    },
    hasMatches: function (): boolean {
      return this.$store.getters['matched'].length > 0;
    }
  }
})
export default class App extends Vue {
}
</script>

<style src="./assets/tailwind.css"/>
<style lang="scss">
html, body {
  height: 100%;
}
</style>
