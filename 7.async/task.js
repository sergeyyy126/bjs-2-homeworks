class AlarmClock {
  constructor() {
    this.alarmCollection = [],
    this.intervalId = null,
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
  }
  if (this.alarmCollection.some(element => element.time === time)) {
    console.warn('Уже присутствует звонок на это же время');
  }

  this.alarmCollection.push({
    callback: callback,
    time: time,
    canCall: true,
  })

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((deletingAlarm) => deletingAlarm.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }
}