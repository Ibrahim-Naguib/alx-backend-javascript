export default function getStudentIdsSum(list) {
  return list.map((obj) => obj.id).reduce((acc, curr) => acc + curr);
}
