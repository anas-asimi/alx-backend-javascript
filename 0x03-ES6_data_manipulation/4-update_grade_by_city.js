export default function updateStudentGradeByCity(
  listStudents,
  city,
  newGrades,
) {
  return listStudents
    .filter((ele) => ele.location === city)
    .map((ele) => ({
      ...ele,
      grade: newGrades.find((x) => x.studentId === ele.id) || 'N/A',
    }));
}
