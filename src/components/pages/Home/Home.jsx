import React, { useState, useEffect } from "react";
import { getItem, addItem } from '../../../services/LocaleStorage'
import './Home.css';
import Modal from '../../Modal/Modal'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function Home() {
  const initialFormData = {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  const [birthDate, setBirthDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [modalIsActive, setModalIsActive] = useState(false);


  function openModal() {
    setModalIsActive(true);
  }


  function closeModal() {
    setModalIsActive(false);
  }


  function handleTextInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }


  // can't use in onChange because will update only after 2 changes
  function handleDateInputChange(inputName, inputValue) {
    setFormData({
      ...formData,
      [inputName]: inputValue
    })
  }

  useEffect(() => {
    const birthDateFormatted = new Date(birthDate).toLocaleDateString('en-US', {month: "2-digit", day: "2-digit", year: "numeric"})
    handleDateInputChange('dateOfBirth', birthDateFormatted)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [birthDate])

  useEffect(() => {
    const startDateFormatted = new Intl.DateTimeFormat('en-US', {month: "2-digit", day: "2-digit", year: "numeric"}).format(startDate); // to avoid invalid date
    handleDateInputChange('startDate', startDateFormatted)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startDate])


  function handleDropDownChange(event, dropdownName) {
    setFormData({
      ...formData,
      [dropdownName]: event.label
    })
  }


  function handleSubmit(event) {
    event.preventDefault()
    
    const employees = JSON.parse(getItem("employees") || "[]") // create an empty array if doesn't exist
    employees.push(formData)
    addItem("employees", JSON.stringify(employees))
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
        <form action="#" id='create-employee' onSubmit={handleSubmit}>
          <fieldset className='employee-data'>
            <legend className="fieldset-legend" >Informations</legend>
            
            <input className="form-input" type="text" name='firstName' id='firstName' placeholder="First Name" onChange={handleTextInputChange} />

            <input className="form-input" type="text" name='lastName' id='lastName' placeholder="Last Name" onChange={handleTextInputChange} />

            <DatePicker
              id='dateOfBirth'
              name='dateOfBirth'
              selected={birthDate}
              onChange={(date) => {
                setBirthDate(date)
              }}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              todayButton="Today"
              dropdownMode="select"
              placeholderText="Date of Birth (DD/MM/YYYY)"
            />

            <DatePicker
              id='startDate'
              name='startDate'
              selected={startDate}
              onChange={(date) => {
                setStartDate(date)
              }}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              todayButton="Today"
              dropdownMode="select"
              placeholderText="Start Date (DD/MM/YYYY)"
            />

            <div className='employee-department'>
              <Dropdown name="departments" id="department" options={departmentsOptions} placeholder="Department" onChange={(event) => handleDropDownChange(event, 'department')} />
            </div>
          </fieldset>

          <fieldset className="employee-address">
            <legend className="fieldset-legend">Address</legend>

            <input className="form-input" name="street" id="street" type="text" placeholder="Street" onChange={handleTextInputChange} />

            <input className="form-input" name="city" id="city" type="text" placeholder="City" onChange={handleTextInputChange} />

            <Dropdown name="state" id="state" options={statesOptions} placeholder="State" onChange={(event) => handleDropDownChange(event, 'state')} />

            <input className="form-input" name="zipCode" id="zipCode" type="text" placeholder="Zip Code" onChange={handleTextInputChange} />
          </fieldset>
        </form>

        <button type='submit' form="create-employee" className="button-save" onClick={openModal} >Save</button>
        <Modal isActive={modalIsActive} onClose={closeModal} message="Employee Created!" />
      </main>
    </div>
  );
}

export default Home;