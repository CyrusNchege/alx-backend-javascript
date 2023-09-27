export default function iterateThroughObject(reportWithIterator) {
  const employeesArray = [...reportWithIterator];
  const result = employeesArray.join(' | ');
  return result;
}

