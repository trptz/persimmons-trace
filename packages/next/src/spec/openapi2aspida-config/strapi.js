// [['10:00', '11:00'], ['11:00', '12:00']]
function toiE(input) {
  // 10:30 -> 630
  const min = (time) => {
    const [h, m] = time.split(":");
    return 60 * Number(h) + Number(m);
  };

  // ['10:00', '11:00'] -> 60
  const diffMin = ([a, b]) => min(b) - min(a);

  return input.reduce((maxMinutes, time) => {
    const diffTime = diffMin(time);
    if (maxMinutes === 0) return diffTime;

    return diffTime > maxMinutes ? diffTime : maxMinutes;
  }, 0);
}
