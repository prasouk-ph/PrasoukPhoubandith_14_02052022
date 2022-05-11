/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from '@testing-library/react'
import ReactDOM from "react-dom";
import { unmountComponentAtNode } from "react-dom";
import Home from '../pages/Home/Home';
// import React, { useState } from "react";
// import App from '../../App'
import Modal from './Modal'


// beforeAll(() => {
//   ReactDOM.createPortal = jest.fn((element, node) => {
//     return element;
//   });
// });

// afterEach(() => {
//   ReactDOM.createPortal.mockClear();
// });


describe('Modal', () => {
  it('Should render without crash', () => {
    render(<Modal isActive={true} onClose={() => null} message="Employee Created!" />)

    screen.debug()
  })
})

describe('When the modal is active', () => {
  it('should render a close button', () => {

  })

  it('should render a message in modal body', () => {

  })

  describe('when I click on the modal body', () => {
    it('should keep the modal active', () => {

    })
  })

  describe('when I click on the close button', () => {
    it('should call onClose function”', () => {

    })
  
    it('should close the modal', () => {
  
    })
  })

  describe('when I click outside modal body', () => {
    it('should call onClose function”', () => {

    })
  
    it('should close the modal', () => {
  
    })
  })

  describe('when I press escape button', () => {
    it('should call onClose function”', () => {

    })
  
    it('should close the modal', () => {
  
    })
  })
})
