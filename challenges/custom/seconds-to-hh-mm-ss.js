export function secondsToHhMmSs(secondsToConvert) {
  const isoString = new Date(secondsToConvert * 1000).toISOString().substr(11, 8);
  const [hours, minutes, seconds] = isoString.split(":");
  return `${hours}:${minutes}:${seconds}`.replace(/^00:/, "");
}
console.log(secondsToHhMmSs(3600));
console.log(secondsToHhMmSs(8500));
console.log(secondsToHhMmSs(400));
console.log(secondsToHhMmSs(30));
console.log(secondsToHhMmSs(0));
