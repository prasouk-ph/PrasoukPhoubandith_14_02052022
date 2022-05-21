import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'

export const addEmployee = createAction(
  "addEmployee",
  (employee) => ({
     payload: { employee: employee }
   })
);

const employeesReducer = createReducer([], (builder) =>
  builder
  .addCase(addEmployee, (draft, action) => {
      draft.push(action.payload.employee)
      return
  })
)


export default configureStore({
  reducer : {
      employees: employeesReducer
  }
});