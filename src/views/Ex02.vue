<template>
  <div class="container">
    <h2>ホテル検索</h2>
    <input type="number" v-model.number="searchPrice" />円以下<br />
    <button type="button" v-on:click="search">検索</button>
    <span v-for="hotel of Hotels" v-bind:key="hotel.id">
      <table border="1">
        <tr>
          <th>ホテル名</th>
          <td>{{ hotel.hotelName }}</td>
        </tr>
        <tr>
          <th>最寄駅</th>
          <td>
            {{ hotel.nearestStation }}
          </td>
        </tr>
        <tr>
          <th>価格</th>
          <td>{{ hotel.price }}</td>
        </tr>
      </table>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private searchPrice = "";
  private Hotels = [];
  /**
   * 検索する.
   *
   * @remarks
   * 入力された値段以下のホテルを検索する
   * 未入力でボタンが押された場合には全件検索される
   */
  search(): void {
    let searchPriceNumber = Number(this.searchPrice);
    this.Hotels =
      this.$store.getters.getHotelsByLessThanPrice(searchPriceNumber);
    if (this.searchPrice === "") {
      this.Hotels = this.$store.getters.getHotels;
    }
  }
}
</script>

<style scoped>
div.container {
  text-align: left;
}
</style>
