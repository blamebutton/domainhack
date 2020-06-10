<template>
  <div>
    <table>
      <tr>
        <th>Prefix</th>
        <th>Domain</th>
        <th>Suffix</th>
      </tr>
      <tr v-for="(match, index) in matched" v-bind:key="index">
        <td>{{ match.prefix }}</td>
        <td>{{ match.domain }}</td>
        <td>{{ match.suffix }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  computed: {
    'matched': function () {
      return this.$store.getters['matched'];
    }
  }
})
export default class MatchList extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
tr, th, td {
  border: 1px solid black;
}
</style>
