<template>
  <div v-if="todayTrainNoList.length">
    <v-timeline>
      <v-timeline-item
        v-for="(item, index) in todayTrainNoList"
        :key="item.station"
        small
        color="red lighten-1"
        :class="index % 2 !== 0 ? 'text-right' : ''"
      >{{ item.station }} {{ item.time }}</v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TrainNoInfo',
  computed: {
    ...mapGetters([
      'todayTrainNoList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.v-timeline:before {
  height: calc(100% - 60px);
  top: 30px;
}
</style>
