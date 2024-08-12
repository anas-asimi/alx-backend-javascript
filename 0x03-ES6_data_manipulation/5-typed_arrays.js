export default function createInt8TypedArray(length, position, value) {
  const dv = new DataView(new Int8Array(length));
  dv.setInt8(position, value);
  return dv;
}
