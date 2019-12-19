<template>
  <v-form ref="form" v-model="valid">
    <v-row justify="center">
      <v-col cols="6">
        <v-select
          v-model="form.station[0]"
          :items="stationList"
          label="出發站"
          required
          :rules="[
            v => !!v || '請選擇出發站',
            v => v !== form.station[1] || '不得與到達站相同'
          ]"
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="form.station[1]"
          :items="stationList"
          label="到達站"
          required
          :rules="[
            v => !!v || '請選擇到達站',
            v => v !== form.station[0] || '不得與出發站相同'
          ]"
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-menu
          v-model="dateMenu"
          :close-on-content-click="false"
          offset-y
          min-width="300px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="form.date"
              label="日期"
              prepend-inner-icon="mdi-calendar-range"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="form.date"
            @input="dateMenu = false"
          ></v-date-picker>
        </v-menu>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <v-menu
          ref="timePicker"
          v-model="timeMenu"
          :close-on-content-click="false"
          offset-y
          min-width="300px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="form.time"
              label="時間"
              prepend-inner-icon="mdi-clock-outline"
              readonly
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="timeMenu"
            v-model="form.time"
            format="24hr"
          ></v-time-picker>
        </v-menu>
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="form.way"
          :items="wayList"
        ></v-select>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          @click="submit"
        >查詢</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import dayjs from 'dayjs'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Timetable',
  data: () => ({
    valid: true,
    dateMenu: false,
    timeMenu: false,
    wayList: [
      { text: '出發', value: 'OriginStopTime' },
      { text: '抵達', value: 'DestinationStopTime' }
    ],
    form: {
      station: [],
      date: dayjs().format('YYYY-MM-DD'),
      time: dayjs().format('HH:mm'),
      way: 'OriginStopTime'
    }
  }),
  computed: {
    ...mapGetters([
      'stationList',
      'timetableList'
    ])
  },
  watch: {
    'form.station': {
      handler (value) {
        if (value[0] !== value[1]) this.$refs.form.resetValidation()
      }
    }
  },
  mounted () {
    this.getStation()
  },
  methods: {
    ...mapActions([
      'getStation',
      'getTimetable'
    ]),
    async submit () {
      // const formString = JSON.stringify(this.form)
      // const storeFormString = JSON.stringify(this.$store.state.thsr.form)
      if (this.$refs.form.validate()) {
        await this.getTimetable({ form: this.form })
        console.log('timetableList', this.timetableList)
      }
    }
  }
}
</script>
