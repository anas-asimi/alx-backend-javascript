export default function getListStudentIds(listStudents, city) {
  return listStudents.filter((ele) => ele.location === city);
}
