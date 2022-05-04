import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import ReactModal from 'react-modal';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import './Home.css';
import employeeCreate from '../../services/employeeService/employeeCreate'


function Home() {
  const initialFormData = {
    firstname: '',
    lastname: '',
    dateofbirth: '',
    startdate: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    departments: ''
  }

  const [formData, setFormData] = useState(initialFormData)
  const [birthDate, setBirthDate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);


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
    handleDateInputChange('dateofbirth', birthDateFormatted)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [birthDate])

  useEffect(() => {
    const startDateFormatted = new Intl.DateTimeFormat('en-US', {month: "2-digit", day: "2-digit", year: "numeric"}).format(startDate); // to avoid invalid date
    handleDateInputChange('startdate', startDateFormatted)
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
    employeeCreate(formData)
  }


  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: "20px 5vw",
    },
  };

  ReactModal.setAppElement(document.getElementById('root'));

  const statesOptions = [
    { value: 'AL', label: 'Alabama', className: 'state' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AS', label: 'American Samoa', className: 'state' },
    { value: 'AZ', label: 'Arizona', className: 'state' },
    { value: 'AR', label: 'Arkansas', className: 'state' },
    { value: 'CA', label: 'California', className: 'state' },
    { value: 'CO', label: 'Colorado', className: 'state' },
    { value: 'CT', label: 'Connecticut', className: 'state' },
    { value: 'DE', label: 'Delaware', className: 'state' },
    { value: 'DC', label: 'District Of Columbia', className: 'state' },
    { value: 'FM', label: 'Federated States Of Micronesia', className: 'state' },
    { value: 'FL', label: 'Florida', className: 'state' },
    { value: 'GA', label: 'Georgia', className: 'state' },
    { value: 'GU', label: 'Guam' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois', className: 'state' },
    { value: 'IN', label: 'Indiana', className: 'state' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky', className: 'state' },
    { value: 'LA', label: 'Louisiana', className: 'state' },
    { value: 'ME', label: 'Maine' },
    { value: 'MH', label: 'Marshall Islands', className: 'state' },
    { value: 'MD', label: 'Maryland', className: 'state' },
    { value: 'MA', label: 'Massachusetts', className: 'state' },
    { value: 'MI', label: 'Michigan', className: 'state' },
    { value: 'MN', label: 'Minnesota', className: 'state' },
    { value: 'MS', label: 'Mississippi', className: 'state' },
    { value: 'MO', label: 'Missouri', className: 'state' },
    { value: 'MT', label: 'Montana', className: 'state' },
    { value: 'NE', label: 'Nebraska', className: 'state' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire', className: 'state' },
    { value: 'NJ', label: 'New Jersey', className: 'state' },
    { value: 'NM', label: 'New Mexico', className: 'state' },
    { value: 'NY', label: 'New York', className: 'state' },
    { value: 'NC', label: 'North Carolina', className: 'state' },
    { value: 'ND', label: 'North Dakota', className: 'state' },
    { value: 'MP', label: 'Northern Mariana Islands', className: 'state' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma', className: 'state' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PW', label: 'Palau' },
    { value: 'PA', label: 'Pennsylvania', className: 'state' },
    { value: 'PR', label: 'Puerto Rico', className: 'state' },
    { value: 'RI', label: 'Rhode Island', className: 'state' },
    { value: 'SC', label: 'South Carolina', className: 'state' },
    { value: 'SD', label: 'South Dakota', className: 'state' },
    { value: 'TN', label: 'Tennessee', className: 'state' },
    { value: 'TV', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont', className: 'state' },
    { value: 'VI', label: 'Virgin Islands', className: 'state' },
    { value: 'VA', label: 'Virginia', className: 'state' },
    { value: 'WA', label: 'Washington', className: 'state' },
    { value: 'WV', label: 'West Virginia', className: 'state' },
    { value: 'WI', label: 'Wisconsin', className: 'state' },
    { value: 'WY', label: 'Wyoming', className: 'state' },
  ]

  const departmentsOptions = [
    { value: 'sales', label: 'Sales', className: 'departments' },
    { value: 'marketing', label: 'Marketing', className: 'departments' },
    { value: 'engineering', label: 'Engineering', className: 'departments' },
    { value: 'human Resources', label: 'Human Resources', className: 'departments' },
    { value: 'legal', label: 'Legal', className: 'departments' },
  ]

  return (
    <div>
      <header className='home-header'>
        <h1>Create Employee</h1>
      </header>

      <main className='home-main'>
        <form action="#" id='create-employee' onSubmit={handleSubmit}>
          <div className='employee-data'>
            <label htmlFor="firstname">First Name</label>
            <input type="text" name='firstname' id='firstname' onChange={handleTextInputChange} />

            <label htmlFor="lastname">Last Name</label>
            <input type="text" name='lastname' id='lastname' onChange={handleTextInputChange} />

            <label htmlFor="dateofbirth">Date of Birth</label>
            <DatePicker
              id='dateofbirth'
              name='dateofbirth'
              selected={birthDate}
              onChange={(date) => {
                setBirthDate(date)
              }}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              todayButton="Today"
              dropdownMode="select"
              placeholderText="DD/MM/YYYY"
            />

            <label htmlFor="startdate">Start Date</label>
            <DatePicker
              id='startdate'
              name='startdate'
              selected={startDate}
              onChange={(date) => {
                setStartDate(date)
              }}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              todayButton="Today"
              dropdownMode="select"
              placeholderText="DD/MM/YYYY"
            />
          </div>

          <fieldset className="employee-address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input name="street" id="street" type="text" onChange={handleTextInputChange} />

            <label htmlFor="city">City</label>
            <input name="city" id="city" type="text" onChange={handleTextInputChange} />

            <label htmlFor="state">State</label>
            <Dropdown name="state" id="state" options={statesOptions} placeholder="Select an option" onChange={(event) => handleDropDownChange(event, 'state')} />

            <label htmlFor="zipcode">Zip Code</label>
            <input name="zipcode" id="zipcode" type="number" onChange={handleTextInputChange} />
          </fieldset>

          <div className='employee-department'>
            <label htmlFor="departments">Department</label>
            <Dropdown name="departments" id="departments" options={departmentsOptions} placeholder="Select an option" onChange={(event) => handleDropDownChange(event, 'departments')} />
          </div>
        
          <button type='submit' onClick={openModal} >Save</button>
          <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Form Submit Modal"
            >
            <p>Employee Created!</p>
            <button className="button-close" onClick={closeModal}>Close</button>
          </ReactModal>
        </form>
      </main>
    </div>
  );
}

export default Home;