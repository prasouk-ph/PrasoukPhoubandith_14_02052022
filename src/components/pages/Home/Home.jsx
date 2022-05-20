import React, { useState } from "react";
import './Home.css';
import Modal from 'react-modal-for-wealth-health';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { addEmployee } from "../../../services/employeesService";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import FormInput from "../../utils/FormInput/FormInput";


function Home() {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [modalMessage, setModalMessage] = useState("Employee Created!");

  const { register, handleSubmit, formState: { errors }, control } = useForm({
    criteriaMode: "all"
  });
  

  function openModal() {
    setModalIsActive(true);
  }


  function closeModal() {
    setModalIsActive(false);
  }

  function onSubmit(data) {
    const dateOfBirthFormatted = new Date(data.dateOfBirth).toLocaleDateString('en-US', { month: "2-digit", day: "2-digit", year: "numeric" })
    const startDateFormatted = new Date(data.startDate).toLocaleDateString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"})
    const formFormatted = {
      firstName: data.firstName,
      lastName: data.lastName,
      dateOfBirth: dateOfBirthFormatted,
      startDate: startDateFormatted,
      street: data.street,
      city: data.city,
      state: data.state.label,
      zipCode: data.zipCode,
      department: data.departments.label
    }

    try {
      addEmployee(formFormatted)
      setModalMessage("Employee Created!")
    } catch (error) {
      setModalMessage("Can't create employee because of database issues!")
    }
    
    openModal()
  }

  const statesOptions = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'DC', label: 'District Of Columbia' },
    { value: 'FM', label: 'Federated States Of Micronesia' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TV', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VI', label: 'Virgin Islands' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
  ]

  const departmentsOptions = [
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'human Resources', label: 'Human Resources' },
    { value: 'legal', label: 'Legal' },
  ]

  return (
    <div>
      <header className='home-header'>
        <h1>Create Employee</h1>
      </header>

      <main className='home-main'>
        <form action="#" id='create-employee' onSubmit={handleSubmit(onSubmit)}>
          <fieldset className='employee-data'>
            <legend className="fieldset-legend" >Informations</legend>
            
            <FormInput>
              <input className={`form-input ${errors.firstName && 'is-invalid'}`} type="text" name='firstName' id='firstName' placeholder="First Name" {...register("firstName", {
                required: "Is required",
                minLength: {
                  value: 2,
                  message: "Should contains at least 2 characters"
                }    
              })} />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p className="input-error" key={type}>{message}</p>
                  ))
                }
              />
            </FormInput>

            <FormInput>
              <input className={`form-input ${errors.lastName && 'is-invalid'}`} type="text" name='lastName' id='lastName' placeholder="Last Name" {...register("lastName", {
                required: "Is required",
                minLength: {
                  value: 2,
                  message: "Should contains at least 2 characters"
                }    
              })} />
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p className="input-error" key={type}>{message}</p>
                  ))
                }
              />
            </FormInput>

            <FormInput>
              <Controller
                control={control}
                name="dateOfBirth"
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                }) => (
                  <DatePicker
                  id='dateOfBirth'
                  onChange={onChange}
                  selected={value}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  todayButton="Today"
                  dropdownMode="select"
                  placeholderText="Date of Birth (DD/MM/YYYY)"
                  className={`form-input ${errors.dateOfBirth && 'is-invalid'}`}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="dateOfBirth"
                message={<p className="input-error">Is required</p>}
              />
            </FormInput>

            <FormInput>
              <Controller
                control={control}
                name="startDate"
                rules={{ required: true }}
                render={({
                  field: { onChange, value },
                }) => (
                  <DatePicker
                  id='startDate'
                  onChange={onChange}
                  selected={value}
                  peekNextMonth
                  showMonthDropdown
                  showYearDropdown
                  todayButton="Today"
                  dropdownMode="select"
                  placeholderText="Start Date (DD/MM/YYYY)"
                  className={`form-input ${errors.startDate && 'is-invalid'}`}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="startDate"
                message={<p className="input-error">Is required</p>}
              />
            </FormInput>

            <div className='employee-department'>
              <FormInput>
                <Controller
                  control={control}
                  name="departments"
                  rules={{ required: true }}
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { invalid, isTouched, isDirty, error },
                    formState,
                  }) => (
                    <Dropdown
                      name="departments"
                      id="department"
                      options={departmentsOptions}
                      placeholder="Department"
                      onChange={onChange}
                      controlClassName={errors.departments && 'is-invalid'}
                    />
                  )}
                />
                <ErrorMessage
                errors={errors}
                name="departments"
                message={<p className="input-error">Is required</p>}
                />
              </FormInput>
                
            </div>
          </fieldset>

          <fieldset className="employee-address">
            <legend className="fieldset-legend">Address</legend>

            <FormInput>    
              <input className={`form-input ${errors.street && 'is-invalid'}`} name="street" id="street" type="text" placeholder="Street" {...register("street", {
                required: "Is required",
                minLength: {
                  value: 2,
                  message: "Should contains at least 2 characters"
                }    
              })} />
              <ErrorMessage
                errors={errors}
                name="street"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p className="input-error" key={type}>{message}</p>
                  ))
                }
              />
            </FormInput>

            <FormInput>                
              <input className={`form-input ${errors.city && 'is-invalid'}`} name="city" id="city" type="text" placeholder="City" {...register("city", {
                required: "Is required",
                minLength: {
                  value: 2,
                  message: "Should contains at least 2 characters"
                }    
              })} />
              <ErrorMessage
                errors={errors}
                name="city"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p className="input-error" key={type}>{message}</p>
                  ))
                }
              />
            </FormInput>
            
            <FormInput>      
              <Controller
                control={control}
                name="state"
                rules={{ required: true }}
                render={({
                  field: { onChange, onBlur, value, name, ref },
                  fieldState: { invalid, isTouched, isDirty, error },
                  formState,
                }) => (
                  <Dropdown
                    name="state"
                    id="state"
                    options={statesOptions}
                    placeholder="State"
                    onChange={onChange}
                    controlClassName={errors.state && 'is-invalid'}
                  />
                )}
              />
              <ErrorMessage
                errors={errors}
                name="state"
                message={<p className="input-error">Is required</p>}
              />
            </FormInput>

            <FormInput>    
              <input className={`form-input ${errors.zipCode && 'is-invalid'}`} name="zipCode" id="zipCode" type="text" placeholder="Zip Code" {...register("zipCode", {
                required: "Is required",
                minLength: {
                  value: 5,
                  message: "Should contains 5 characters"
                }    
              })} />
              <ErrorMessage
                errors={errors}
                name="zipCode"
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <p className="input-error" key={type}>{message}</p>
                  ))
                }
              />
            </FormInput>
          </fieldset>
        </form>

        <button type='submit' form="create-employee" className="button-save">Save</button>
        <Modal isActive={modalIsActive} onClose={closeModal} message={modalMessage} />
      </main>
    </div>
  );
}

export default Home;