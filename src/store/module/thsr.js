import dayjs from 'dayjs'
import {
  getStation,
  getTimetable,
  getTodayDailyTrainInfo,
  getTodayTrainNo,
  getAvailableSeat
} from '@/api/thsr'
import { isAfterTime, timeToMinute, diffTime } from '@/libs/util'

export default {
  state: {
    station: [],
    form: {},
    timetable: [],
    todayDailyTrainInfo: [],
    todayTrainNo: [],
    availableSeat: []
  },
  mutations: {
    setStation (state, data) {
      state.station = data
    },
    setTimetable (state, data) {
      state.timetable = data
    },
    setForm (state, data) {
      state.form = data
    },
    setTodayDailyTrainInfo (state, data) {
      state.todayDailyTrainInfo = data
    },
    setTodayTrainNo (state, data) {
      state.todayTrainNo = data
    },
    setAvailableSeat (state, data) {
      state.availableSeat = data
    }
  },
  getters: {
    stationList: state => state.station.map(item => ({
      text: item.StationName.Zh_tw,
      value: item.StationID
    })),
    timetableList: state => {
      const { way, time } = state.form
      return state.timetable.filter(item =>
        way === 'OriginStopTime'
          ? isAfterTime(item[way].ArrivalTime, time)
          : isAfterTime(time, item[way].ArrivalTime)
      ).map(item => ({
        trainNo: item.DailyTrainInfo.TrainNo,
        startTime: item.OriginStopTime.ArrivalTime,
        endTime: item.DestinationStopTime.ArrivalTime,
        diffTime: diffTime(item.DestinationStopTime.ArrivalTime, item.OriginStopTime.ArrivalTime)
      })).sort((a, b) => timeToMinute(a.startTime) - timeToMinute(b.startTime))
    },
    todayDailyTrainInfoList: state => state.todayDailyTrainInfo.map(item => item.TrainNo),
    todayTrainNoList: state => {
      if (!state.todayTrainNo.length) return []
      return state.todayTrainNo[0].StopTimes.map(item => ({
        station: item.StationName.Zh_tw,
        time: item.ArrivalTime
      }))
    },
    availableSeatList: state => {
      if (!state.availableSeat.length) return []
      const availableSeats = state.availableSeat[0].AvailableSeats
      const time = dayjs().format('HH:mm')
      return [availableSeats.find(item => isAfterTime(item.DepartureTime, time))].map(item => ({
        trainNo: item.TrainNo,
        endingStation: item.EndingStationName.Zh_tw,
        stopStations: item.StopStations
      }))
    }
  },
  actions: {
    async getStation ({ commit }) {
      const res = await getStation()
      commit('setStation', res.data)
    },
    async getTimetable ({ commit }, { form }) {
      const params = {
        OriginStationID: form.station[0],
        DestinationStationID: form.station[1],
        TrainDate: form.date
      }
      const res = await getTimetable(params)
      commit('setTimetable', res.data)
      commit('setForm', { ...form })
    },
    async getTodayDailyTrainInfo ({ commit }) {
      const res = await getTodayDailyTrainInfo()
      commit('setTodayDailyTrainInfo', res.data)
    },
    async getTodayTrainNo ({ commit }, { TrainNo }) {
      const res = await getTodayTrainNo({ TrainNo })
      commit('setTodayTrainNo', res.data)
    },
    async getAvailableSeat ({ commit }, { StationID }) {
      const res = await getAvailableSeat({ StationID })
      commit('setAvailableSeat', res.data)
    }
  }
}
