import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(students = getListStudents(), city) {
  return students.filter((student) => student.location === city);
}
