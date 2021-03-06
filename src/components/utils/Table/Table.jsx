import { useState } from 'react';
import { useTable, useSortBy, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table';
import './Table.css';


function Table({ columns, data, className, error }) {
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
    pageCount,
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

  const pageSizeOptions = [10, 25, 50, 100]

  // Render the UI for your table
  return (
    <div className='table-container'>
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
        <thead className={`${className}-header`}>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className={`${className}-header-th`} {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span className="table-header-icon">
                    {column.isSorted ? (column.isSortedDesc ? '???' : '???') : '???'}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {error &&
            <tr>
              <td className='no-data' colSpan={9} >Can't get data !</td>
            </tr>
          }
          {page.length === 0 && error === false &&
            <tr>
              <td className='no-data' colSpan={9} >No data available in table</td>
            </tr>
          }
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
        <p className="table-results">Showing {rows.length !== 0 ? (pageIndex * pageSize) + 1 : 0} to {(pageSize * pageIndex) + page.length} of {rows.length} entries</p>

        <div className="pagination-commands">
          <button className='pagination-button' onClick={() => previousPage()} disabled={!canPreviousPage}>
            {'<'}
          </button>{' '}

          <span>
            {' '}
            <strong>
              Page {pageIndex + 1} of {rows.length !== 0 ? pageCount : 1}
            </strong>{' '}
          </span>

          <span>
          | Go to:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            max={pageCount}
            min="1"
            className='page-redirection'
          />
        </span>{' '}

          <button className='pagination-button' onClick={() => nextPage()} disabled={!canNextPage}>
            {'>'}
          </button>{' '}

        </div>
      </div>

    </div>
  )
}

export default Table;