<template>
  <div>
    <DomainInput></DomainInput>
    <MatchList></MatchList>
  </div>
</template>

<script>
import {Component, Vue} from 'vue-property-decorator';
import DomainInput from '@/components/DomainInput';
import MatchList from '@/components/MatchList';

@Component({
  components: {MatchList, DomainInput}
})
export default class App extends Vue {
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
