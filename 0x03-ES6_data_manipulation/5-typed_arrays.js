export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const arr8 = new Int8Array(buffer);
  if (position > arr8.length) {
    throw new Error('Position outside range');
  }
  arr8[position] = value;
  return new DataView(buffer);
}
