import db from '../firebase/firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';

  const employeesCollection = collection(db, 'employees');

export async function getEmployeesList() {
    const employeeDocument = await getDocs(employeesCollection);
    const employeesList = employeeDocument.docs.map(doc => doc.data());
  return employeesList
}

export async function addEmployee(data) {
  return await addDoc(employeesCollection, {name: 'paul'})
}