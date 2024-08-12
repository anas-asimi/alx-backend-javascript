export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((ele) => ele.location === city);
}
