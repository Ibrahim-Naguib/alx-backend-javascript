export default function cleanSet(set, startString) {
  if (startString === '' || typeof startString !== 'string') {
    return '';
  }
  const result = [];

  set.forEach((str) => {
    if (str.startsWith(startString) && typeof str === 'string') {
      result.push(str.slice(startString.length));
    }
  });
  return result.join('-');
}
