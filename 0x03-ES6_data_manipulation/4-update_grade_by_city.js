export default function updateStudentGradeByCity(list, city, newGrades) {
  const listByCity = list.filter((obj) => obj.location === city);
  return listByCity.map((obj) => {
    const filteredGrades = newGrades.filter((GradeObj) => GradeObj.studentId === obj.id);
    if (filteredGrades.length > 0) {
      return {
        ...obj,
        grade: filteredGrades[0].grade,
      };
    }
    return {
      ...obj,
      grade: 'N/A',
    };
  });
}
