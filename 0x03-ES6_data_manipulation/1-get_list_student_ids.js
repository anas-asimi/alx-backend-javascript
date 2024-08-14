export default function getListStudentIds(listStudents) {
  if (listStudents instanceof Array) {
    return listStudents.map((ele) => ele.id);
  }
  return [];
}
