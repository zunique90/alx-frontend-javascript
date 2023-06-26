export default function createIteratorObject(report) {
  let all = [];
  for (const item of Object.values(report.all)) {
    all = [
      ...all,
      ...item,
    ];
  }
  return all;
}
