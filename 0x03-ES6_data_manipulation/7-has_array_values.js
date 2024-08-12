export default function hasValuesFromArray(mySet, myArray) {
  for (const ele of myArray) if (!mySet.has(ele)) return false;
  return true;
}
