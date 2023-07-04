export default function cleanSet(set, startString) {
  let res = '';
  if (!(startString && typeof startString === 'string')) {
    return res;
  }
  for (const value of set) {
    if (value && value.startsWith(startString)) {
      res += `${value.substring(startString.length)}-`;
    }
  }
  return res.slice(0, -1);
}
