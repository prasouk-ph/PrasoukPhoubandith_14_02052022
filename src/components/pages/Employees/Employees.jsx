import './Employees.css';


function Employees() {

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
      </main>
    </div>
  );
}

export default Employees;