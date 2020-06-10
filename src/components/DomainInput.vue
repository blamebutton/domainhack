<template>
  <div>
    <label for="domain">Domain</label>
    &nbsp;
    <input id="domain" type="text" v-model="input" autocomplete="off">
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
