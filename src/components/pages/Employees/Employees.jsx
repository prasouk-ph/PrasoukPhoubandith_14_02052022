import Table from '../../utils/Table';
import { useMemo, useState, useEffect } from 'react';
import { getEmployeesList } from '../../../services/employeesService';
import './Employees.css';


function Employees() {
  const [employees, setEmployees] = useState([])
  const [error, setError] = useState(false)


  async function getData() {
    try {
      const employeesList = await getEmployeesList()
      setEmployees(employeesList)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }

  useEffect(() => {
    getData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const columns = useMemo(
    () => [
      {
        Header: 'First Name',
        accessor: 'firstName',
        sortType: 'basic',
      },
      {
        Header: 'Last Name',
        accessor: 'lastName',
        sortType: 'basic',
      },
      {
        Header: 'Start Date',
        accessor: 'startDate',
        sortType: 'basic',
      },
      {
        Header: 'Department',
        accessor: 'department',
        sortType: 'basic',
      },
      {
        Header: 'Date of Birth',
        accessor: 'dateOfBirth',
        sortType: 'basic',
      },
      {
        Header: 'Street',
        accessor: 'street',
        sortType: 'basic',
      },
      {
        Header: 'City',
        accessor: 'city',
        sortType: 'basic',
      },
      {
        Header: 'State',
        accessor: 'state',
        sortType: 'basic',
      },
      {
        Header: 'Zip Code',
        accessor: 'zipCode',
        sortType: 'basic',
      },
    ],
    []
  )

  const data = useMemo(
    () => employees,
    [employees]
  )

  return (
    <div>
      <header className='employees-header'>
        <h1>Current Employees</h1>
      </header>

      <main className='employees-main'>
        <Table className='employees-table' columns={columns} data={data} error={error} />
      </main>
    </div>
  );
}

export default Employees;