<template>
  <div class="w-full">
    <label class="label" for="domain">Domain</label>
    &nbsp;
    <input
      autocomplete="off"
      autofocus
      class="input"
      id="domain"
      placeholder="johndeer" type="text" v-model="input">
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  computed: {
    input: {
      get() {
        return this.$store.getters['input'];
      },
      set(value) {
        this.$store.dispatch('input:update', value);
      }
    }
  }
})
export default class DomainInput extends Vue {
}
</script>

<!--suppress CssInvalidAtRule -->
<style scoped lang="scss">
.label {
  @apply block text-gray-700 text-sm font-bold mb-2;
}

.input {
  @apply transition duration-200 ease-in-out shadow appearance-none border rounded w-full py-2 px-3 text-gray-700;

  &:focus {
    @apply outline-none shadow-outline;
  }
}
</style>
