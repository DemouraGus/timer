const alarms = process.argv.slice(2).map(Number);

const timerAlarm = function (numbers) {
  for (const num of numbers) {
    if (num > 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, num * 1000);
    }
  }
};

timerAlarm(alarms);