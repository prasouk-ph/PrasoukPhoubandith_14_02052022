import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

export const employeeCreated = createAction(
  'employeeCreated',
  (employeeData) => ({
    payload: { employeeData: employeeData }
  })
);

const initialState = []

const employeesReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(employeeCreated, (draft, action) => {
      draft.push(action.payload.employeeData)
    return
  })
)

export default configureStore({
  reducer : {
      employees: employeesReducer
  }
});