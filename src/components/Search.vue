<template>
  <div class="w-full bg-white dark:bg-gray-800 rounded shadow">
    <InputField class="px-6 py-4"></InputField>
    <MatchList class="px-6 pb-4" v-if="hasMatches"></MatchList>
    <NoMatch class="px-6 pb-4" v-else-if="hasInput"></NoMatch>
    <NoInput class="px-6 pb-4" v-else></NoInput>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import MatchList from "@/components/match/MatchList.vue";
import InputField from "@/components/search/InputField.vue";
import NoMatch from "@/components/search/NoMatch.vue";
import NoInput from "@/components/search/NoInput.vue";

@Component({
  components: {InputField, MatchList, NoMatch, NoInput},
  computed: {
    hasInput: function (): boolean {
      return this.$store.getters.input;
    },
    hasMatches: function (): boolean {
      return this.$store.getters.matches.length > 0;
    },
  }
})
export default class Search extends Vue {
}
</script>
