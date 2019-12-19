export const timeToArray = time => time.split(':')

export const timeToMinute = time => parseInt(timeToArray(time)[0] * 60) + parseInt(timeToArray(time)[1])

export const isAfterTime = (time1, time2) => timeToMinute(time1) > timeToMinute(time2)

export const diffTime = (time1, time2) => {
  const diff = timeToMinute(time1) - timeToMinute(time2)
  const HH = Math.floor(diff / 60)
  const mm = diff - HH * 60
  return [`${HH}:${mm < 10 ? '0' + mm : mm}`, HH, mm]
}
