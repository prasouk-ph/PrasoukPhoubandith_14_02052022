import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ReactModal from 'react-modal';
import "react-datepicker/dist/react-datepicker.css";
import './Home.css';


function Home() {
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
              selected={startDate}
              onChange={(date) => setStartDate(date)}
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

            <label htmlFor="state-button">State</label>
            <select name="state" id="state">
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AS">American Samoa</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FM">Federated States Of Micronesia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="GU">Guam</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MH">Marshall Islands</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PW">Palau</option>
              <option value="PA">Pennsylvania</option>
              <option value="PR">Puerto Rico</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VI">Virgin Islands</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <div className='employee-department'>
            <label htmlFor="departments">Department</label>
            <select name="departments" id="departments">
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="engineering">Engineering</option>
              <option value="human Resources">Human Resources</option>
              <option value="legal">Legal</option>
            </select>
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