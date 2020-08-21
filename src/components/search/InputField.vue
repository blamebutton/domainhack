<template>
  <div class="w-full">
    <label class="block text-gray-700 dark:text-gray-400 text-sm font-bold mb-2" for="domain">Domain</label>
    &nbsp;
    <input
      autocomplete="off"
      autofocus
      class="shadow appearance-none border dark:border-none bg-white dark:bg-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
      id="domain"
      placeholder="john-deer" type="text" v-model="input">
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  computed: {
    input: {
      get(): string {
        return this.$store.getters.input;
      },
      set(value: string): void {
        this.$store.dispatch('input:update', value);
      },
    }
  }
})
export default class InputField extends Vue {
}
</script>
