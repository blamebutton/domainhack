<template>
  <div>
    <DomainInput></DomainInput>
    <MatchList></MatchList>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import DomainInput from "@/components/DomainInput.vue";
import MatchList from "@/components/MatchList.vue";

@Component({
  components: {MatchList, DomainInput},
})
export default class Home extends Vue {

};
</script>
