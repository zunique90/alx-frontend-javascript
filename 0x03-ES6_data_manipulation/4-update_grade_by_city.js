const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter((student) => student.location === city)
  .map((student) => {
    const grade = newGrades.find((g) => g.studentId === student.id);
    return {
      ...student,
      grade: grade ? grade.grade : 'N/A',
    };
  });

export default updateStudentGradeByCity;
