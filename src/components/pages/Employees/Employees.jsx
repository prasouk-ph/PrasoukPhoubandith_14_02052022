import Table from '../../utils/Table/Table';
import { useMemo, useState } from 'react';
// import { useMemo } from 'react';
import { useSelector } from 'react-redux'
// import { getItem } from '../../../services/LocaleStorage'
import './Employees.css';


function Employees() {
  const [error] = useState(false)
  const employeesList = useSelector((state) => state.employees)

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
    () => employeesList,
    [employeesList]
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