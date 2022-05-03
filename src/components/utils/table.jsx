import { useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table'
import './Table.css'


function Table({ columns, data, className }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    rows,
    state,
    setGlobalFilter,
    page,
    state: { pageIndex, pageSize },
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,
    canPreviousPage,
    canNextPage,
  } = useTable({
    columns,
    data,
  }, useGlobalFilter, useSortBy, usePagination)
  
  
  function GlobalFilter({
    globalFilter,
    setGlobalFilter,
  }) {
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce(value => {
      setGlobalFilter(value || undefined)
    }, 1000);
  
    return (
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`Search`}
      />
    )
  }

  const pageSizeOptions = [1, 2, 10, 25, 50, 100]

  // Render the UI for your table
  return (
    <div>
      <div className="table-options">
        <div className='table-display'>
          <p>Show</p>

          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {pageSizeOptions.map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select >

          <p>entries</p>
        </div>
    
        <GlobalFilter
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>

      <table className={className} {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted ? (column.isSortedDesc ? ' ↓' : ' ↑') : ' ↕'}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>

      <div className="table-footer">
        <p>Showing {(pageIndex * pageSize) + 1} to {(pageSize * pageIndex) + page.length} of {rows.length} entries</p>

        <div className="pagination-commands">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'Previous'}
          </button>{' '}

          <span>
            {' '}
            <strong>
              {pageIndex + 1}
            </strong>{' '}
          </span>

          <span>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}

          <button onClick={() => nextPage()} disabled={!canNextPage}>
            {'Next'}
          </button>{' '}

        </div>
      </div>

    </div>
  )
}

export default Table;