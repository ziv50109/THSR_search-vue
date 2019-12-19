import axios from '@/libs/api.request'

export const getNews = () => {
  return axios.request({
    url: `News`,
    params: {
      $top: 5
    },
    method: 'get'
  })
}

export const getStation = () => {
  return axios.request({
    url: `Station`,
    method: 'get'
  })
}

export const getTimetable = ({ OriginStationID, DestinationStationID, TrainDate }) => {
  return axios.request({
    url: `DailyTimetable/OD/${OriginStationID}/to/${DestinationStationID}/${TrainDate}`,
    method: 'get'
  })
}

export const getTodayDailyTrainInfo = () => {
  return axios.request({
    url: `DailyTrainInfo/Today`,
    method: 'get'
  })
}

export const getTodayTrainNo = ({ TrainNo }) => {
  return axios.request({
    url: `DailyTimetable/Today/TrainNo/${TrainNo}`,
    method: 'get'
  })
}

export const getAvailableSeat = ({ StationID }) => {
  return axios.request({
    url: `AvailableSeatStatusList/${StationID}`,
    method: 'get'
  })
}
