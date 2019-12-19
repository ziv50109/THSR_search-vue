<template>
  <v-row justify="center">
    <v-col cols="12" lg="10">
      <v-card>
        <v-tabs v-model="tab" grow>
          <v-tab>時刻查詢</v-tab>
          <v-tab>特定班次<br class="mobile-show" />停靠站查詢</v-tab>
          <v-tab>特定車站<br class="mobile-show" />座位查詢</v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item>
            <v-container>
              <Timetable />
              <TimetableInfo />
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <TrainNo />
              <TrainNoInfo />
            </v-container>
          </v-tab-item>
          <v-tab-item>
            <v-container>
              <AvailableSeat />
              <AvailableSeatInfo />
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Timetable from '@/components/Panel/Timetable'
import TrainNo from '@/components/Panel/TrainNo'
import AvailableSeat from '@/components/Panel/AvailableSeat'
import TimetableInfo from '@/components/Resoult/TimetableInfo'
import TrainNoInfo from '@/components/Resoult/TrainNoInfo'
import AvailableSeatInfo from '@/components/Resoult/AvailableSeatInfo'

export default {
  name: 'Panel',
  components: {
    Timetable,
    TrainNo,
    AvailableSeat,
    TimetableInfo,
    TrainNoInfo,
    AvailableSeatInfo
  },
  data: () => ({
    tab: null
  })
}
</script>
