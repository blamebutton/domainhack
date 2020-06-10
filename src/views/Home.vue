<template>
  <div>
    <DomainInput></DomainInput>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import DomainInput from "@/components/DomainInput.vue";

@Component({
  components: {DomainInput},
})
export default class Home extends Vue {

};
</script>
