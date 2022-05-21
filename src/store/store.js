import { configureStore, createAction, createReducer, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistCombineReducers, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';


const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
};

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

const _persistedReducer = persistCombineReducers(persistConfig, {employees: employeesReducer});

export default configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER
      ],
    },
  }),
});
