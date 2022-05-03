import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ReactModal from 'react-modal';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css";
import './Home.css';


function Home() {
  const [birthDate, setBirthDate] = useState();
  const [startDate, setStartDate] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

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
        <form action="#" id='create-employee'>
          <div className='employee-data'>
            <label htmlFor="first-name">First Name</label>
            <input type="text" name='first-name' id='first-name' />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" name='last-name' id='last-name' />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker
              id='date-of-birth'
              selected={birthDate}
              onChange={(date) => setBirthDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              todayButton="Today"
              dropdownMode="select"
              placeholderText="DD/MM/YYYY"
            />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker
              id='start-date'
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <Dropdown id="state" options={statesOptions} placeholder="Select an option" />

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <div className='employee-department'>
            <label htmlFor="departments">Department</label>
            <Dropdown id="departments" options={departmentsOptions} placeholder="Select an option" />
          </div>
        </form>
        
        <button type='submit' onClick={openModal}>Save</button>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Form Submit Modal"
        >
          <p>Employee Created!</p>
          <button className="button-close" onClick={closeModal}>Close</button>
        </ReactModal>
      </main>
    </div>
  );
}

export default Home;