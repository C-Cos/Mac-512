export default function isEmpty(array: string[]) {
  return Array.isArray(array) && array.length === 0;
}
