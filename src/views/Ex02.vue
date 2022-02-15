<template>
  <div class="container">
    <h2>ホテル検索</h2>
    <input type="number" v-model.number="searchPrice" />円以下<br />
    <button type="button" v-on:click="search">検索</button>
    <span v-for="hotel of searchHotels" v-bind:key="hotel.id">
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
  private searchHotels = [];

  search(): void {
    let searchPriceNumber = Number(this.searchPrice);
    this.searchHotels =
      this.$store.getters.getHotelByLessThanPrice(searchPriceNumber);
    if (this.searchPrice === "") {
      this.searchHotels = this.$store.getters.getHotels;
    }
  }
}
</script>

<style scoped>
div.container {
  text-align: left;
}
</style>
