import db from '../firebase/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export async function getEmployeesList() {
  const employeesCollection = collection(db, 'employees');
  const employeeDocument = await getDocs(employeesCollection);
  const employeesList = employeeDocument.docs.map(doc => doc.data());
  return employeesList
}

// export async function addEmployee() {
//   const employeesCollection = collection(db, 'employees');
//   const employeeDocument = await getDocs(employeesCollection);
//   const employeesList = employeeDocument.docs.map(doc => doc.data());
//   return employeesList
// }