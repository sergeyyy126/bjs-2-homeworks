class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some(item => item.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
      callback: callback, 
      time: time,
      canCall: true,
    });
  }

  removeClock(time){
    this.alarmCollection = this.alarmCollection.filter((item) => item.time !== time);
  }

  // getCurrentFormattedTime(){
  //   return this.alarmCollection.time;
  // }

  getCurrentFormattedTime() {
    return new Date().toLocaleTimeString("ru-Ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  start() {
    if (this.intervalId) {
      return;
    }
 
    const intervalId = setInterval(() => {
      this.alarmCollection.forEach((alarm) => {
        if (alarm.time !== this.getCurrentFormattedTime() && alarm.canCall === true) {
          alarm.canCall = false;
          alarm.callback();
        }
      });
    }, 1000);

    this.intervalId = intervalId;
  }

  stop() {
    clearInterval();
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => {
      alarm.canCall = true;
    });
  }

  clearAlarms() {
    stop();
    this.alarmCollection = [];
  }
}

let clock;
clock = new AlarmClock();
const callback = f => f;

clock.addClock("23:49", callback);
clock.addClock("23:50", callback);
//clock.removeClock("16:45");
clock.start();
//console.log(clock);