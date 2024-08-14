export default function updateStudentGradeByCity(
  listStudents,
  city,
  newGrades,
) {
  return listStudents
    .filter((ele) => ele.location === city)
    .map((ele) => {
      const newGrade = newGrades.find((x) => x.studentId === ele.id);
      return {
        ...ele,
        grade: newGrade !== undefined ? newGrade.grade : 'N/A',
      };
    });
}
