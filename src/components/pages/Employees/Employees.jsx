import Table from '../../utils/Table';
import { useMemo } from 'react';
import './Employees.css';


function Employees() {
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
    () => [
      {
        firstName: 'first',
        lastName: 'lastName',
        startDate: 'startDate',
        department: 'department',
        dateOfBirth: 'dateOfBirth',
        street: 'street',
        city: 'city',
        state: 'state',
        zipCode: 'zipCode',
      },
      {
        firstName: 'paul',
        lastName: 'pierce',
        startDate: '01/01/2000',
        department: 'sales',
        dateOfBirth: '02/02/1980',
        street: 'street',
        city: 'paris',
        state: 'france',
        zipCode: '78000',
      },
    ],
    []
  )

  return (
    <div>
      <header className='employees-header'>
        <h1>Current Employees</h1>
      </header>

      <main className='employees-main'>
        <section className="filter-section">
          <div className="display-filter">
            <p>Show</p>

            <select name="entries" id="entries">
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>

            <p>entries</p>
          </div>

          <div className="search-filter">
            <label htmlFor="search-bar">Search:</label>
            <input type="text" id='search-bar'/>
          </div>
        </section>
        
        <section className="table-section">
          <table id="employee-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Start Date</th>
                <th>Department</th>
                <th>Date of Birth</th>
                <th>Street</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className='no-data' colSpan={9}>No data available in table</td>
              </tr>
            </tbody>
          </table>

          <div className="table-footer">
            <p>Showing 1 to 2 of 2 entries</p>

            <div className="pagination-command">
              <p>Previous</p>
              <p className='page-number'>1</p>
              <p>Next</p>
            </div>
          </div>
        </section>

        <Table className='employees-table' columns={columns} data={data} />
      </main>
    </div>
  );
}

export default Employees;