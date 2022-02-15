<template>
  <div class="container">
    <h2>野球チーム一覧</h2>
    <div v-for="team of teams" v-bind:key="team.id">
      <router-link :to="'/TeamDetail/' + team.id">{{
        team.teamName
      }}</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/Team";
@Component
export default class Ex01 extends Vue {
  /**
   *Vuex内の野球チーム情報を取得し返す.
   */
  get teams(): Array<Team> {
    return this.$store.getters.getBaseBallTeam;
  }
}
</script>

<style scoped></style>
