export default function getStudentsByLocation(listStudents, city) {
  if (city !== '') {
    return listStudents.filter((ele) => ele.location === city);
  }
  return [];
}
