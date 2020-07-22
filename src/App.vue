<template>
  <div class="p-4 bg-gray-300 dark:bg-gray-900 h-full flex flex-col justify-start sm:justify-center items-center">
    <Explanation class="mb-4 sm:w-8/12 md:w-6/12 lg:w-1/3 xl:w-1/4"></Explanation>
    <Search class="sm:w-8/12 md:w-6/12 lg:w-1/3 xl:w-1/4"></Search>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Explanation from "@/components/Explanation.vue";
import Search from "@/components/Search.vue";

@Component({
  components: {Explanation, Search},
})
export default class App extends Vue {
}
</script>

<style src="./assets/tailwind.css"/>
