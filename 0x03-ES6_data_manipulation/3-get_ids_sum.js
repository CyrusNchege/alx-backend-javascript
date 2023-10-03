import getListStudents from './0-get_list_students';

export default function getStudentIdsSum(students = getListStudents()) {
  return students.reduce((current, next) => current + next.id, 0);
}
