<template>
  <div v-if="availableSeatList.length">
    <hr>
    <v-simple-table class="mt-3">
      <template v-slot:default>
        <thead>
          <tr>
            <th>車次</th>
            <th>終點站</th>
            <th>停靠站</th>
            <th>標準席<br class="mobile-show" />剩餘座位</th>
            <th>商務席<br class="mobile-show" />剩餘座位</th>
          </tr>
        </thead>
        <tbody v-for="list in availableSeatList" :key="list.trainNo">
          <tr v-for="item in list.stopStations" :key="item.StationID">
            <td>{{ list.trainNo }}</td>
            <td>{{ list.endingStation }}</td>
            <td>{{ item.StationName.Zh_tw }}</td>
            <td :class="item.BusinessSeatStatus">{{ seatStatus[item.BusinessSeatStatus] }}</td>
            <td :class="item.StandardSeatStatus">{{ seatStatus[item.StandardSeatStatus] }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AvailableSeatInfo',
  computed: {
    ...mapGetters([
      'availableSeatList'
    ])
  },
  data: () => ({
    seatStatus: {
      Available: '尚有座位',
      Limited: '座位有限',
      Full: '已無座位'
    }
  })
}
</script>

<style lang="scss" scoped>
.Available {
  color: #1565C0;
}
.Limited {
  color: #F9A825;
}
.Full {
  color: #D50000;
}
</style>
