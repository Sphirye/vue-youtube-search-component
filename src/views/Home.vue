<template>
  <div class="home">
    <SearchBox/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SearchBox from '@/components/SearchBox.vue'; // @ is an alias to /src

@Component({
  components: {
    SearchBox,
  },
})
export default class Home extends Vue {}
</script>
