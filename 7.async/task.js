class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');
    }
    if (this.alarmCollection.some(element => element.time === time)) {
      console.warn('Уже присутствует звонок на это же время');
    }
  
    return this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    })
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter((deletingAlarm) => deletingAlarm.time !== time);
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    let checkClock = (clock) => {
      let alarm = this.getCurrentFormattedTime();
      if (clock.time === alarm) {
        return clock.callback();
      }
    }
    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(clock => checkClock(clock));
      }, 1000);
    }
    return;
  }

  stop() {
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach((resetAlarm) => (resetAlarm.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  const phoneAlarm = new AlarmClock();
  phoneAlarm.addClock('08:00', () => console.log('Просыпайся'), 1);
  phoneAlarm.addClock('08:01', () => { console.log('Пора гулять с Балу'); phoneAlarm.removeClock(2) }, 2);
  phoneAlarm.addClock('08:02', () => console.log('Подъем'), 3);
  phoneAlarm.printAlarms();
  phoneAlarm.removeClock(3);
  phoneAlarm.removeClock(1);
  phoneAlarm.removeClock(2);
  phoneAlarm.printAlarms();
}

testCase();