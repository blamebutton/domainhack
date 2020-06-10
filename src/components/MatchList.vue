<template>
  <div>
    <table>
      <tr>
        <th>Prefix</th>
        <th>Domain</th>
      </tr>
      <tr v-bind:key="index" v-for="(match, index) in matched">
        <td>{{ match.prefix }}</td>
        <td>{{ match.domain }}</td>
      </tr>
    </table>
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
