export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce(
    (accumulator, currentEle) => accumulator + currentEle.id,
    0,
  );
}
