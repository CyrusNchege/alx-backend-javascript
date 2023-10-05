interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
  }

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

function printTeacher(firstName: string, lastName: string): string {
  const firstLetter = firstName.charAt(0).toUpperCase(); 
  return `${firstLetter}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const fullName = printTeacher("John", "Doe");
console.log(fullName);

