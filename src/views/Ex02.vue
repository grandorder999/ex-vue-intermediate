<template>
  <div class="container">
    <h2>ホテル検索</h2>
    <input type="number" />円以下<br />
    <button type="button" v-on:click="search"></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped></style>
