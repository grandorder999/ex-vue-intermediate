<template>
  <div class="container">
    <form>
      <div class="title">球団名</div>
      <div>{{ selectTeam.teamName }}</div>
      <div class="title">本拠地</div>
      <div>{{ selectTeam.headquarters }}</div>
      <div class="title">発足日</div>
      <div>{{ selectTeam.inaugurationFormat }}</div>
      <div class="title">歴史</div>
      <div>
        <pre>{{ selectTeam.history }}</pre>
      </div>
      <button v-on:click="backPage" type="button">戻る</button>
    </form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Team } from "@/types/Team";
@Component
export default class TeamDetail extends Vue {
  //対象の野球チームオブジェクト
  private selectTeam = new Team(0, "", "", new Date(), "");
  /**
   *VuexストアのGetter経由で受け取ったリクエストパラメータのIDから１件の野球チーム情報を取得する.
   */
  created(): void {
    console.log("createdイベント発生");
    const teamId = Number(this.$route.params.id);
    this.selectTeam = this.$store.getters.getTeamById(teamId);
    console.log(this.selectTeam);
  }
  /**
   *野球チーム一覧ページに戻る.
   */
  backPage(): void {
    this.$router.push("/Ex01");
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
}
</style>
